import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)

  useEffect(() => {
    console.log('mounted')
  })

  // useEffect(() => {
  //   console.log("mounted");
  // }, []);

  // useEffect(() => {
  //   console.log("mounted");
  // }, [counter]);

  return (
    <div className='container'>
      <h1>useEffect</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Counter +: {counter}
        </button>
      </div>
      <hr />
      <div>
        <button onClick={() => setCounter2(counter2 - 1)}>
          Counter -: {counter2}
        </button>
      </div>
    </div>
  )
}

export default App
