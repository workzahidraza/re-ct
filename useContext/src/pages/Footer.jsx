import React from "react";
import Courses from "./cources";
import { useContext } from "react";
import { NameContext } from "./NameContext";

const Footer = () => {
  const name=useContext(NameContext)
  return (
    <>
      <h1>footer {name}</h1>
      <Courses />
    </>
  );
};

export default Footer;
