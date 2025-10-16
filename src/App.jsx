import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Singup";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
