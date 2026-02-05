import { useState } from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Section from "./pages/Section";
import NameProvider from "./pages/NameContext";

function App() {
  const name1 = "Zahid";
  return (
    <>
      <Navbar />

      <Section />
      <NameProvider>
        <Footer />
      </NameProvider>
    </>
  );
}

export default App;
