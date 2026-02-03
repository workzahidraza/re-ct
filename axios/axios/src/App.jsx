import { useState } from "react";
import axios from "axios";

function App() {
  const [allUser, setAlluser] = useState([]);
  async function getData() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");

    setAlluser(data.data);
  }
  return (
    <>
      <div className="h-screen w-auto bg-black">
        <button onClick={getData} className="bg-white px-2 py-4 rounded-lg">
          Get Data
        </button>
        {allUser.map((prop, idx) => {
          return (
            <div key={idx}>
              <h4 className="text-white">{prop.name} {idx +1}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
