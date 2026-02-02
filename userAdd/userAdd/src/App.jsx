import { useState } from "react";
import Form from "./components/from";
import UiCards from "./components/uiCards";
function App() {
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [position, setposition] = useState("");
  return (
    <div className="bg-black h-screen">
      {/* <h1 className="bg-red-400">feele</h1> */}
      <Form name={name} img={img} position={position} />
      <UiCards name={name} img={img} position={position} />
    </div>
  );
}

export default App;
