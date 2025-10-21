import React from "react";
import {Link } from "react-router-dom";
function PresentationCard() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://picsum.photos/id/29/1200/800)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-Neutral">Bienvenido a Im Teacher</h1>
      <p className="mb-5 text-Neutral">
        La aplicación que estabas buscando para tu escuela
      </p>

     <Link to="/signup" className="btn  border-Primary bg-Neutral text-Primary">Comenzar</Link>
    </div>
  </div>
  
</div>
  );
}

export default PresentationCard;
