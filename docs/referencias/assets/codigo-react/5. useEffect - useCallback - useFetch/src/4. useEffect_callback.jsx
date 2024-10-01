import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(null);

  console.log("App");

  //El problema de sacar esta parte fuera del useEffect es que cada vez que haya
  // un renderizado en la App se crea de nuevo este bloque, por ejemplo cada vez
  // que se ejecute el counter. ¡OJO! No se renderiza, se crea
  // En este caso nos da igual, pero en una App grandes, si.
  // async function fetchData() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setUsers(data);
  // }

  // Para solucionar eso tenemos el useCallback.
  // useCallback es un hook que nos permite memorizar una función.
  // Esto quiere decir que si la función que le pasamos como argumento
  // no ha cambiado, useCallback no la volverá a crear.

  const fetchData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }, []);

  // OJO!!. No hay que abusar, useCallback almacena en memoria.

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

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
