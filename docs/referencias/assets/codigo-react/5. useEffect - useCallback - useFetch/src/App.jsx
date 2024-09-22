import React, { useState } from "react";
import { useFetch } from "./hooks/2. useFetch_Try_Catch";

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("App");

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/user"
  );

  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>;

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
