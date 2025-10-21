import React from "react";
import MainLayout from "../layouts/MainLayout";
function Contactus() {
    return (
        <MainLayout>
            <div className="container mx-auto p-4  text-black min-h-screen">
                <h1 className="text-4xl font-bold mb-4">Contáctame</h1>
                <p className="mb-6">
                    Si detectas algún problema con el sitio web o tienes alguna
                    sugerencia, no dudes en contactarnos a través del siguiente
                    formulario:
                </p>
                <form className="max-w-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input

                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Tu Nombre"
                            required
                        />
                    </div>
                    <div className="mb-4">  
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input

                            type="email"    
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Tu Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}

export default Contactus;
