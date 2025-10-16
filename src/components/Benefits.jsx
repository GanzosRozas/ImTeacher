import React from "react";

function Benefits({Title, Description}) {
  return (
    <div className="benefits border-t-2 border-b-2 border-Primary bg-white  text-Primary rounded-lg m-10 shadow-lg">
      <div className="benefits-header p-14  text-2xl font-bold text-center">
        <h2>Beneficios de Usar Im Teacher</h2>
      </div>
      <div className="benefits-list flex  gap-2 p-9">
        <div className="flex-1">
          <h2 className="text-xl m-5">Registro de estudiantes</h2>
          <p className="text-base p-5">
            Podras registrar a nuevos estudiantes de manera sencilla y rápida.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl m-5">Control de acceso/Toma de asistencia por código QR</h2>
          <p className="text-base p-5">
            Facilita el control de asistencia de los estudiantes mediante el
            escaneo de un código QR, ademas podras generar el Codigo QR cuando sea necesario y mandarlo a imprimir.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-xl m-5">Calendario escolar</h2>
          <p className="text-base p-5">
            Permite a los profesores gestionar el calendario escolar de manera
            eficiente.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl m-5">Contenidos y Objetivos del Programa de Educación Primaria</h2>
          <p className="text-base p-5">
            Proporciona acceso a los contenidos y objetivos del programa de
            educación primaria.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
