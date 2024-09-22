// Vamos a usar useEffect para hacer una llamadaa una API
// https://jsonplaceholder.typicode.com/

import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  //const [users, setUsers] = useState(null);

  // Activar para el ejemplo del if, para ver los renderizados del componente.
  //console.log("App");

  useEffect(() => {
    console.log("useEffect");
    // Fetch es una API del navegador, es el navegador el que va a gestionar la petición
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setUsers(data));

    //console.log("¿antes o despues?"); // Vemos que se ejecuta antes.
  }, []);

  // Solución para el problema de los users null, eso o inicializarlos con []
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
