import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [position, setPosition] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    if (!name || !img || !position) return;

    setAllUsers([...allUsers, { name, img, position }]);

    setName("");
    setImg("");
    setPosition("");
  };

  const removeUser = (index) => {
    setAllUsers(allUsers.filter((_, i) => i !== index));
  };

  return (
    <>
      <form
        onSubmit={formHandler}
        className="h-40 w-auto bg-gray-800 px-5 py-5 flex justify-center items-center gap-5 flex-wrap"
      >
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter img url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          className="bg-white rounded-2xl px-4 py-2 h-10"
          type="text"
          placeholder="Enter employee position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button className="bg-yellow-700 px-4 py-2 h-10 rounded-lg active:scale-95">
          Submit
        </button>
      </form>

      <div className="flex flex-wrap gap-10 px-5 py-5">
        {allUsers.map((user, idx) => (
          <div
            key={idx}
            className="h-80 w-60 bg-gray-900 rounded-xl flex flex-col items-center justify-center gap-5"
          >
            <img
              className="h-40 w-40 bg-white rounded-full object-cover"
              src={user.img}
              alt={user.name}
            />
            <h2 className="text-2xl font-bold uppercase text-blue-500">
              {user.name}
            </h2>
            <h2 className="text-xl font-semibold">{user.position}</h2>
            <button
              onClick={() => removeUser(idx)}
              className="bg-red-500 px-4 py-2 rounded-lg text-black active:scale-95"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Form;
