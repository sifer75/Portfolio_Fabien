import React, { useState, useRef } from "react";
import "./Menu.css";

function Menu({ sectionRef }) {
  const elements = [
    "Accueil",
    "A propos",
    "Portfolio",
    "Compétences",
    "Me Contacter",
  ];

  const [arrow, setArrow] = useState(false);
  const [selectedElement, setSelectedElement] = useState("Accueil");
  const [container, setContainer] = useState(false);
  const [border, setBorder] = useState(false);
  const elementsReordered = [selectedElement, ...elements.filter(item => item !== selectedElement)];

  const goingTo = (element) => {
    if (sectionRef && sectionRef[element] && sectionRef[element].current) {
      sectionRef[element].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrow = () => {
    setArrow(!arrow);
  };

  const handleBorderArrow = () => {
    setBorder(!border);
  };

  const handleContainer = () => {
    setContainer(!container);
  };

  const changeElement = (element) => {
    setSelectedElement(element);
    setArrow(!arrow);
    setContainer(!container)
    goingTo(element);
  };

  return (
    <div className="test_menu">
      <div className="container_name">
        <div className="name_text">Fabien Taupin</div>
      </div>
      <div className="container_menu2" onMouseEnter={handleContainer} onMouseLeave={handleContainer}>
        {arrow ? (
          <div className="list-menu">
            {elementsReordered.map((element) => (
              <label key={element} className="menuElement">
                <input
                  key={element}
                  type="radio"
                  value={element}
                  name="element"
                  onClick={() => changeElement(element)}
                />
                {element}
              </label>
            ))}
          </div>
        ) : (
          <div className="element">{selectedElement}</div>
        )}
        <div
          className={`arrow_container ${border ? "borderArrow" : ""} ${container ? "border" : "borderBase"}`}
          onClick={handleArrow}
          onMouseEnter={handleBorderArrow}
          onMouseLeave={handleBorderArrow}
        >
          <div className={`arrow ${arrow ? "arrowUp" : "arrowDown"}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;