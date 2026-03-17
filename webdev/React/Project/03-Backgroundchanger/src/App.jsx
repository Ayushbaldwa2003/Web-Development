import { useState } from "react";
export default function App() {
  const [colour, setColour] = useState("black");
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>
    <button textalign="center" onClick={()=>{setColour("red")}}>Red colour</button>
    <button textalign="center" onClick={()=>{setColour("blue")}}>Blue colour</button>
    <button textalign="center" onClick={()=>{setColour("green")}}>Green colour</button>
    </div>
  );
}
