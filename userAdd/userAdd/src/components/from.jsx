import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [position, setposition] = useState("");
  const [alluser, setAlluser] = useState([]);

  function formHandler(e) {
    e.preventDefault();
    // const oldUser = [...alluser];
    // oldUser.push({ name, img, position });
    setAlluser([...alluser, { name, img, position }]);

    setname("");
    setimg("");
    setposition("");
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="h-40 w-auto bg-gray-800 px-5 py-5 flex justify-center align-center gap-5 flex-wrap"
      >
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter img url"
          value={img}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter employee position"
          value={position}
          onChange={(e) => {
            setposition(e.target.value);
          }}
        />
        <button className="bg-yellow-700 px-4 py-2 h-10 rounded-lg active:scale-95">
          Submit
        </button>
      </form>
      
    </>
  );
}

export default Form;
