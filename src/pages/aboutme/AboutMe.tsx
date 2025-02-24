import React from "react";
import "./aboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <h1>Mi Currículum</h1>
      <hr />

      <section className="section">
        <h2>Información Personal</h2>
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Email:</strong> juanperez@example.com</p>
        <p><strong>Teléfono:</strong> +34 600 123 456</p>
      </section>
      <hr />

      <section className="section">
        <h2>Educación</h2>
        <p><strong>Máster en Ciencias de la Computación</strong></p>
        <p>Universidad Nacional - 2023</p>
      </section>
      <hr />

      <section className="section">
        <h2>Experiencia</h2>
        <p><strong>Desarrollador Web</strong> - Empresa XYZ (2020 - 2023)</p>
        <ul>
          <li>Desarrollo de aplicaciones web con React y TypeScript.</li>
          <li>Optimización de rendimiento y accesibilidad.</li>
        </ul>
      </section>
      <hr />

      <section className="section">
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript, TypeScript, React, Node.js</li>
          <li>Investigación académica en IA</li>
          <li>Escritura técnica y publicaciones</li>
        </ul>
      </section>
      <hr />
    </div>
  );
};

export default AboutMe;
