import React from "react";
import MainLayout from "../layouts/MainLayout";
function AboutUs() {
    return (
        <MainLayout>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Hola a todos Me presento</h1>
      <p className="py-6">
        Soy un desarrollador web Ingeniero en sistemas computacionales, mi nombre es Javier y estoy emocionado de compartir mi este proyecto con ustedes. He creado esta plataforma
         con el objetivo de ayudar a mi Madre a facilitar el proceso de algunas tareas que me comento en su momento.
      </p>
      <p className="py-6">
        Este proyecto esta desarrollado con las siguientes herramientas.
        
      </p>
        <ul className="list-disc list-inside mb-4">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Daisy UI</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            
            <li>Estas ultimas No se si las use xd</li>
            <li>JWT</li>
            <li>Bcrypt</li>
        </ul>
        <p className="py-6">
            Herramimentas de IA que me ayudaron a desarrollar este proyecto.
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>ChatGPT</li>
            <li>Copilot</li>
        </ul>
        <p className="py-6">
            Estas herramientas me ayudaron en estos aspectos.
        </p>
        <ul>
            <li>Calidad del código</li>
            <li>Flujo de trabajo</li>
            <li>Investigaciones</li>
            <li>Aprendizaje</li>
        </ul>
      <p className="py-6">
        Espero que les guste y cualquier duda o sugerencia no duden en contactarme.
      </p>
      <button className="btn btn-primary">Contactame</button>
    </div>
  </div>
</div>
        </MainLayout>
    );
}

export default AboutUs;
