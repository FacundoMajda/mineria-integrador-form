import React from "react";
import { Formulario } from "./components/form/form.jsx";
import { Formik } from "formik";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Formulario Mineria de Datos</h1>
        <h3>Trabajo Integrador</h3>
        <Formik
          initialValues={{
            edad: "",
            genero: "",
            localidad: "",
            nivel: "",
          }}
          onSubmit={(values) => {
            console.log("Formulario enviado con:", values);
          }}
        >
          <Formulario />
        </Formik>
      </div>
    </>
  );
}

export default App;
