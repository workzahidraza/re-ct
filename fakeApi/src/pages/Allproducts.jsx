import React, { useEffect } from "react";
import axios from "axios";

const Allproducts = () => {
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <div className="h-screen w-auto bg-black flex flex-wrap gap-10 items-start p-10">
        <div className="h-auto w-70  flex flex-col  items-center rounded-2xl px-2 py-3 gap-2 bg-amber-400 ">
          <img className="h-50 w-90 rounded-2xl bg-amber-50" src="" alt="" />
          <h2 className="text-2xl text-extrabold uppercase">price</h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            optio.
          </p>
        </div>
      </div>
    </>
  );
};

export default Allproducts;
