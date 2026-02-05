import { useState } from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Section from "./pages/Section";

function App() {
  const name1 = "Zahid";
  return (
    <>
      <Navbar />

      <Section username={name1} />
      <Footer />
    </>
  );
}

export default App;
