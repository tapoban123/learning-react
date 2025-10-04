import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [chars, setCharacters] = useState(false);

  const generatePassword = () => {};

  return (
    <>
      <div className="w-screen h-screen items-start flex justify-center">
        <div className="w-xl rounded-lg px-5 py-5 mt-15  bg-gray-700">
          <h2 className="text-center text-2xl w-xl">Password Generator</h2>
          <br />
          <div className="h-16 bg-amber-900">
            <input
              type="text"
              name="password"
              id="password"
              className="h-full w-3/4 text-2xl bg-white text-black px-3 py-3 rounded-lg"
              value={password}
              readOnly
            />
            <button type="button" className="h-full">Copy</button>
            {/* <button className="text-white h-full w-auto">Copy</button> */}
          </div>
          <div className="mt-5 flex gap-3">
            {" "}
            <label>Length</label>
            <input type="range" name="length" id="length" />
            <input
              type="checkbox"
              name="includeCharacters"
              id="includeCharacters"
            />{" "}
            <label>Characters</label>
            <input
              type="checkbox"
              name="includeNumbers"
              id="includeNumbers"
            />{" "}
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
