import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dock = ({ openCalculator }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 flex gap-6 shadow-xl">
        {/* Calculator */}
        <div
          onClick={openCalculator}
          className="w-14 h-14 bg-gray-800 text-white rounded-xl flex items-center justify-center 
                     hover:scale-125 hover:-translate-y-2 transition duration-300 cursor-pointer"
        >
          <CiCalculator1 size={28} />
        </div>

        {/* File */}
        <div className="w-14 h-14 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:scale-125 hover:-translate-y-2 transition">
          <FaRegFileAlt size={24} />
        </div>

        {/* Notes */}
        <div className="w-14 h-14 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:scale-125 hover:-translate-y-2 transition">
          <MdNotes size={26} />
        </div>

        {/* Browser */}
        <div
          onClick={() => window.open("https://www.google.com", "_blank")}
          className="w-14 h-14 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:scale-125 hover:-translate-y-2 transition cursor-pointer"
        >
          <FaGlobe size={24} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
