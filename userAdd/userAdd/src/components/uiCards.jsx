import React from "react";

function UiCards({ name, img, position }) {
  return (
    <>
      <div className="h-screen w-auto gap-10 flex items-start justify-start px-5 py-5 flex-wrap">
        <div className="h-80 w-60 bg-gray-900 rounded-xl flex items-center justify-center flex-col gap-5 ">
          <img className="h-40 w-40 bg-white rounded-full" src={img} alt="" />
          <h2 className="text-2xl font-bold uppercase text-blue-500 ">
            {name}
          </h2>
          <h2 className="text-2xl font-bold uppercase  ">{position}</h2>
          <button className="bg-red-500 px-4 py-2 rounded-lg text-black active:scale-95">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default UiCards;
