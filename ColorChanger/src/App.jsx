import { useState } from "react";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [color, setColor] = useState("green");

  const onTapOlive = () => {
    setColor("olive");
  };
  const onTapGreen = () => {
    setColor("green");
  };

  const onTapBlue = () => {
    setColor("blue");
  };

  const onTapCyan = () => {
    setColor("cyan");
  };

  const onTapPurple = () => {
    setColor("purple");
  };

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className={
          "h-screen w-screen flex items-end justify-center text-white py-15"
        }
      >
        <ButtonGroup
          onOliveClick={onTapOlive}
          onBlueClick={onTapBlue}
          onCyanClick={onTapCyan}
          onGreenClick={onTapGreen}
          onPurpleClick={onTapPurple}
        />
      </div>
    </>
  );
}

export default App;
