import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between align-baseline bg-black text-Neutral p-4 border-b-2 border-Primary">
      
      <div className="flex font-bold text-2xl  p-2">
        <p>Im Teacher</p>
      </div>

      <div className="flex gap-4 p-2">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de Nosotros</Link>
        <Link to="/contact">Contactanos</Link>
      </div>
      
      <div className="flex gap-4 mr-4">
        <div className=" border-2 border-Primary  p-2 pl-6 pr-6 rounded-4xl bg-Primary ">
          <Link to="/signup">Regístrate</Link>
        </div>
        <div className=" border-2 border-Primary  p-2 pl-6 pr-6 rounded-4xl bg-black text-Neutral">
          <Link to="/login">Iniciar Sesión</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
