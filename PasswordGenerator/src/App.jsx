import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbersAllowed, setNumbers] = useState(false);
  const [specialCharsAllowed, setCharacters] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pswrd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (specialCharsAllowed) str += "!@#$%^&*()-_=+|[]{};:/?.>";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pswrd += str.charAt(char);
    }

    setPassword(pswrd);
  }, [specialCharsAllowed, numbersAllowed, length, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [numbersAllowed, specialCharsAllowed, length, generatePassword]);

  const copyTextToClipboard = useCallback(() => {
    // passwordRef.current?.setSelectionRange(0, 1);
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  });

  return (
    <>
      <div className="w-screen h-screen items-start flex justify-center">
        <div className="w-xl rounded-lg px-5 py-5 mt-15  bg-gray-700 items-center justify-center align-middle">
          <h2 className="text-center text-2xl w-xl">Password Generator</h2>
          <br />
          <div className="h-14  align-middle flex">
            <input
              type="text"
              name="password"
              id="password"
              className="h-full w-3/4 text-2xl bg-white text-black px-3 py-3 rounded-lg"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={() => {
                copyTextToClipboard();
              }}
              className="bg-red-600 outline-none border-none  hover:bg-blue-700 h-full shrink-0 text-white"
            >
              Copy
            </button>
          </div>
          <div className="mt-5 flex gap-3">
            <input
              type="range"
              name="length"
              id="length"
              min={1}
              max={100}
              value={length}
              onChange={(val) => setLength(val.target.value)}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              name="includeCharacters"
              id="includeCharacters"
              value={specialCharsAllowed}
              onChange={() => setCharacters((prev) => !prev)}
            />
            <label>Characters</label>
            <input
              type="checkbox"
              name="includeNumbers"
              id="includeNumbers"
              value={numbersAllowed}
              onChange={() => setNumbers((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
