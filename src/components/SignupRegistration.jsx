import React from "react";

export default function SignupRegistration() {
    return (
        <div className="form-container bg-Neutral flex flex-col w-1/2 h-screen">

        <div className="form-section w-full h-3/4 p-10 border-Tertiary border-solid border-l-2 border-b-2 flex justify-center flex-col items-center">
          <h2 className="form-title ">Regístrate</h2>

          <form action="" className="signup-form  w-3/4 grid grid-cols-4 gap-6">
            <fieldset className="fieldset col-span-2">
              <legend className="fieldset-legend text-Primary">Nombre:</legend>
              <div>
                <input
                  id="name"
                  type="text"
                  className="input p-6  rounded-none "
                  placeholder="Nombre"
                />
              </div>
            </fieldset>

            <fieldset className="fieldset col-span-2">
              <legend className="fieldset-legend text-Primary">
                Apellidos:
              </legend>
              <div>
                <input
                  id="lastname"
                  type="text"
                  className="input p-6  rounded-none "
                  placeholder="Apellidos"
                />
              </div>
            </fieldset>

            <fieldset className="fieldset col-span-4">
              <legend className="fieldset-legend text-Primary">
                Correo Electrónico:
              </legend>
              <div>
                <input
                  id="email"
                  type="email"
                  className="inputCustom rounded-none "
                  placeholder="Correo Electrónico"
                />
              </div>
            </fieldset>

            <fieldset className="fieldset col-span-4">
              <legend className="fieldset-legend text-Primary">
                Contraseña:
              </legend>
              <div className="">
                <input
                  id="password"
                  type="password"
                  className="inputCustom rounded-none "
                  placeholder="Contraseña"
                />
              </div>
            </fieldset>
          </form>
        </div>
        <div className=" h-1/4 border-Tertiary border-l-2 border-t-2 border-solid   ">
         <div className="flex justify-between p-10  ">
          <p className="login-link text-Primary ">
            ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
          </p>
          <button type="submit" className="submit-button py-3 px-6 rounded-4xl object-contain  text-Primary border-2 border-Primary hover:bg-Tertiary hover:border-0 hover:text-Neutral cursor-pointer">
            Crear Cuenta
          </button>
        </div>
        </div>
       
      </div>
    )
}
