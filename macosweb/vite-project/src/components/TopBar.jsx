import React from "react";

const TopBar = () => {
  const now = new Date();
  const formatted =
    now.toDateString() +
    " " +
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="absolute top-0 left-0 w-full h-10 bg-black/70 backdrop-blur-md flex items-center justify-between px-6 text-sm text-white">
      <div className="font-semibold"> zOS </div>
      <div className="flex gap-6">
        
        <span>{formatted}</span>
      </div>
    </div>
  );
};

export default TopBar;
