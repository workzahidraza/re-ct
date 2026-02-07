import React, { useEffect } from "react";
import axios from "axios";

const Allproducts = () => {
  const getData =async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Allproducts;
