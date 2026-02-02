import { useState } from "react";
import Form from "./components/from";
import UiCards from "./components/uiCards";
function App() {
 
  return (
    <div className="bg-black h-screen">
      {/* <h1 className="bg-red-400">feele</h1> */}
      <Form  />
      <UiCards />
    </div>
  );
}

export default App;
