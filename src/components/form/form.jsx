import React, { useState } from "react";
import { useFormikContext, Formik } from "formik";
import "tailwindcss/tailwind.css";

export const Formulario = () => {
  const { handleSubmit, setSubmitting, setErrors } = useFormikContext();
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (values) => {
    try {
      await handleSubmit();
      console.log(values);
    } catch (error) {
      setSubmitting(false);
      setErrors({ submitError: "Hubo un problema al enviar el formulario." });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Formik
        initialValues={{
          edad: "",
          genero: "",
          localidad: "",
          nivel: "",
        }}
        onSubmit={() => handleFormSubmit()}
      >
        {({ values, handleSubmit, handleBlur, errors, touched }) => (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 formulario"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="edad"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Edad
              </label>
              <input
                type="number"
                name="edad"
                id="edad"
                placeholder="Introduce tu edad"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.edad && touched.edad ? "border-red-500" : ""
                }`}
                value={values.edad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.edad && touched.edad && (
                <p className="text-red-500 text-xs italic">{errors.edad}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="genero"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Género
              </label>
              <select
                name="genero"
                id="genero"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.genero && touched.genero ? "border-red-500" : ""
                }`}
                value={values.genero}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Selecciona una opción</option>
                <option value="m">Masculino</option>
                <option value="f">Femenino</option>
                <option value="nb">No Binario</option>
                <option value="pn">Prefiero no decirlo</option>
              </select>
              {errors.genero && touched.genero && (
                <p className="text-red-500 text-xs italic">{errors.genero}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="localidad"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Localidad
              </label>
              <input
                type="text"
                name="localidad"
                id="localidad"
                placeholder="Selecciona tu localidad"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.localidad && touched.localidad ? "border-red-500" : ""
                }`}
                value={values.localidad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.localidad && touched.localidad && (
                <p className="text-red-500 text-xs italic">
                  {errors.localidad}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="nivel"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nivel de Estudio
              </label>
              <input
                type="text"
                name="nivel"
                id="nivel"
                placeholder="Selecciona nivel máximo alcanzado"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.nivel && touched.nivel ? "border-red-500" : ""
                }`}
                value={values.nivel}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nivel && touched.nivel && (
                <p className="text-red-500 text-xs italic">{errors.nivel}</p>
              )}
            </div>
            <div className="mb-4">
              {errors.submitError && (
                <p className="text-red-500 text-xs italic">
                  {errors.submitError}
                </p>
              )}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
