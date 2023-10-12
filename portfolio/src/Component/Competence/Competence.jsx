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
        <div className="cv-button">
          <Link to="/cv" style={{textDecoration: "none"}}>
            <p>Voir mon CV</p>
          </Link>
          <div className="fleche"></div>
        </div>
      </div>
    </>
  );
}

export default Competence;
