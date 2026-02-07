import React from "react";
import { useNavigate } from "react-router-dom";
import Allproducts from "./Allproducts";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className="h-screen w-screen  bg-black flex flex-col items-center justify-center">
      <div className="h-50 w-120 bg- flex flex-col items-center justify-center gap-10 rounded-2xl">
        <h1 className="text-5xl text-blue-500 font-extrabold whitespace-nowrap  ">
          Explore products
        </h1>
        <button
          
          className="px-7 py-3 bg-blue-700 rounded-xl text-white text-xl active:scale-95"
        >
          Explore
        </button>
      </div>
    </div>
  );
};
export default Home;
