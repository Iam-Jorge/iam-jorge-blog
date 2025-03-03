import { useEffect, useState } from "react";
import "./tableOfContents.css";

interface Heading {
  id: string;
  text: string;
  level: string;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [numberedHeadings, setNumberedHeadings] = useState<string[]>([]);

  useEffect(() => {
    const elements: Heading[] = Array.from(document.querySelectorAll("h2, h3")).map((el) => {
      const text = el.textContent || "";
      const id = el.id || text.replace(/\s+/g, "-").toLowerCase();

      if (!el.id) el.id = id; // Asigna un id al encabezado si no lo tiene

      return { id, text, level: el.tagName };
    });

    setHeadings(elements);
    generateNumberedHeadings(elements);
  }, []);

  // Función para generar los números jerárquicos
  const generateNumberedHeadings = (headings: Heading[]) => {
    let h2Counter = 1; // Contador para los h2
    let h3Counter = 1; // Contador para los h3
    let numberedHeadings: string[] = [];

    headings.forEach((heading) => {
      if (heading.level === "H2") {
        numberedHeadings.push(`${h2Counter}. ${heading.text}`);
        h2Counter++;
        h3Counter = 1; // Resetear el contador de h3 cuando cambiamos a un nuevo h2
      } else if (heading.level === "H3") {
        numberedHeadings.push(`${h2Counter - 1}.${h3Counter} ${heading.text}`);
        h3Counter++;
      }
    });

    setNumberedHeadings(numberedHeadings);
  };

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Desplazamiento suave con un margen superior del 10%
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.1, // 10% de la altura de la ventana
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sidebarTOC">
      <h2 className="text-lg font-bold">Índice</h2>
      <ul className="nav-menuTOC mt-2">
        {headings.map((heading, index) => {
          const isH3 = heading.level === "H3";
          return (
            <li 
              key={index} 
              className={`nav-itemTOC ${isH3 ? "ml-8" : ""}`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(heading.id);
                }}
                className="nav-linksTOC"
              >
                {numberedHeadings[index]}
              </a>
            </li>
          );
        })}
      </ul>

      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default TableOfContents;