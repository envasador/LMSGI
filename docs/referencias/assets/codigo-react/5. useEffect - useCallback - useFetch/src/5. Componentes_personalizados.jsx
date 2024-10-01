import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("App");

  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!data) return <div>cargando...</div>;
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
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
