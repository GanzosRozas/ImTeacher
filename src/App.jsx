import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Singup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
