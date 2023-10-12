import React, { useRef } from "react";
import "./Description.css";
import { Link } from "react-router-dom";

function Description({ sectionRef }) {
  return (
    <>
      <div className="page-description" ref={sectionRef}>
        <div className="container-description">
          <div className="description">
            <h2>je suis developpeur front end</h2>
            <p>
            Développeur front end passionné par la création de solutions
            numériques innovantes, je suis spécialisé dans la mise en place de
            sites web et d'applications web robustes et performantes. J'aime
            résoudre des problèmes complexes en utilisant des approches
            créatives et des solutions technologiques de pointe. J'apprécie le
            travail en équipe et intégrer les suggestions pour contribuer au
            succès de projets passionnants. Également attentif aux détails,
            orienté vers la qualité et soucieux de l'expérience utilisateur. Je
            m'efforce de créer des produits qui sont esthétiquement plaisants et
            faciles à utiliser.
            </p>
            <div className="dialog">
              <div className="image"></div>
              <Link to={"mailto:taupinfabien2607@gmail.com"} className="link">
                <p>Discutons</p>
              </Link>
            </div>
          </div>
          <img className="visual"></img>
        </div>
      </div>
    </>
  );
}

export default Description;
