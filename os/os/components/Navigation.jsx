import React from "react";

const Navigation = () => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl">
        <h2 className="text-white font-semibold">Home</h2>
        <h2 className="text-white font-semibold">Files</h2>
        <h2 className="text-white font-semibold">Settings</h2>
      </div>
    </div>
  );
};

export default Navigation;
