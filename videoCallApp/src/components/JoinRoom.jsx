// import React from "react";

// const JoinRoom = () => {
//   return <>
//   <h2>join JoinRoom</h2>
//   </>
// };

// export default JoinRoom;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const navigate = useNavigate(); // 1️⃣ navigation function
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleJoin = () => {
    // abhi sirf page change karega
    navigate("/call");
  };

  return (
    <>
      <h2>Join Room</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Room ID"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />

      <br />

      <button onClick={handleJoin}>Join Call</button>
    </>
  );
};

export default JoinRoom;
