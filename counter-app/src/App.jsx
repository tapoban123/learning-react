import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subtractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>My Counter App</h1>
      <br />
      <h2>Counter Value: {counter}</h2>
      <br />

      <button onClick={addCounter}>Increase {counter}</button>
      <br />
      <br />
      <button onClick={subtractCounter}>Decrease {counter}</button>
    </>
  );
}

export default App;
