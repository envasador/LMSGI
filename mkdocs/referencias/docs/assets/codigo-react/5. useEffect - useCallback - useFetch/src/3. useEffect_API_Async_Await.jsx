import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(null);

  console.log("App");

  //   useEffect(async () => {
  //     console.log("useEffect");
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   }, []);
  // Este código va a funcionar, pero nos devuelve un warning,¿? Pq useEffect solo
  // puede devolver una función o nada, y async devuelve una promesa.
  // Si nos fijamos en la consola, nos da la respuesta...

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  // Lo que canta un poco ahora que parece que ese useEffect es como muy grande y
  // además tener que hacer una llamada así para cada llamada...
  // para eso tenemos los hooks personalizados.

  if (!users) return <div>cargando...</div>;

  return (
    <div className="container">
      <h1>useEffect</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Counter +: {counter}
        </button>
      </div>
      <hr />
      <h1>Respuesta API</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
