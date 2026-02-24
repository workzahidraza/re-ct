import React, { useState } from "react";

const Calculator = ({ onClose }) => {
  const [input, setInput] = useState("");

  const press = (v) => setInput((p) => p + v);
  const clear = () => setInput("");
  const calc = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl w-72 p-4 border border-white/10">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm opacity-70">Calculator</span>
        <button onClick={onClose} className="text-red-400">
          ✕
        </button>
      </div>

      <div className="bg-black rounded-lg p-3 text-right text-2xl mb-3 min-h-[50px]">
        {input || "0"}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "C",
          "+",
        ].map((b) => (
          <button
            key={b}
            onClick={() => (b === "C" ? clear() : press(b))}
            className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2"
          >
            {b}
          </button>
        ))}
        <button
          onClick={calc}
          className="col-span-4 bg-blue-600 hover:bg-blue-500 rounded-lg py-2"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
