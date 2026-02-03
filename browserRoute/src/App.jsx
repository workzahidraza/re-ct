import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import home from "./pages/home";
import about from "./pages/home";
import product from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<about />}></Route>
        <Route path="/product" element={<product />}></Route>
      </Routes>
    </>
  );
}

export default App; 
