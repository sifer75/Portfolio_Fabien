import React, { useRef } from "react";
import "./Competence.css";
import ContainerSkill from "../ContainerSkill/ContainerSkill";
import { Link } from "react-router-dom";

function Competence({ sectionRef }) {
  return (
    <>
      <div className="page-competence" ref={sectionRef}>
        <div className="title">COMPÉTENCES</div>
        <ContainerSkill></ContainerSkill>
          <Link to="/cv" style={{textDecoration: "none"}}>
        <div className="cv-button">
            <p>Voir mon CV</p>
          <div className="fleche"></div>
        </div>
          </Link>
      </div>
    </>
  );
}

export default Competence;
