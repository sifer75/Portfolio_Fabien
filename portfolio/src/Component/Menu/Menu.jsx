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

  const goingTo = (element) => {
   console.log(sectionRef)
   console.log(sectionRef[element])
   console.log(sectionRef[element].current)
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
    setArrow(false);
    goingTo(element);
  };

  return (
    <>
      <div className="test_menu">
        <div className="container_name">
          <div className="name_text">Fabien Taupin</div>
        </div>
        {arrow ? (
          <>
            <div
              className="container_menu"
              onMouseEnter={handleContainer}
              onMouseLeave={handleContainer}
            >
              <div className="list-menu">
                {elements.map((element) => {
                  return (
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
                  );
                })}
              </div>
            </div>
            <div
              className={`arrow_container ${border ? "borderArrow" : ""} ${
                container ? "border" : "borderBase"
              }
            `}
              onClick={() => {
                handleArrow();
              }}
              onMouseEnter={handleBorderArrow}
              onMouseLeave={handleBorderArrow}
            >
              <div className={`arrow ${arrow ? "arrowUp" : "arrowDown"}`}></div>
            </div>
          </>
        ) : (
          <>
            <div
              className="container_menu2"
              onMouseEnter={handleContainer}
              onMouseLeave={handleContainer}
            >
              <div className="element">{selectedElement}</div>

              <div
                className={`arrow_container ${border ? "borderArrow" : ""} ${
                  container ? "border" : "borderBase"
                }
            `}
                onClick={() => handleArrow()}
                onMouseEnter={handleBorderArrow}
                onMouseLeave={handleBorderArrow}
              >
                <div
                  className={`arrow ${arrow ? "arrowUp" : "arrowDown"}`}
                ></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Menu;
