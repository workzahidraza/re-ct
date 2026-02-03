import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  function running() {
    console.log("Use Effect is running");
  }
  useEffect(() => {
    running();
  },[counter1,counter2]);
  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increse
      </button>

      <h1>{counter1}</h1>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        increse
      </button>

      <h1>{counter2}</h1>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        increse
      </button>
    </>
  );
}

export default App;
