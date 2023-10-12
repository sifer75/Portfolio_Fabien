import React from "react";
import { Link } from "react-router-dom";
import "./ProjetContainer.css";

function ProjetContainer({ site, showImage, title, code, text }) {
  return (
    <>
        <div className="section-projet">
        <Link to={site}>
          <img src={showImage} className="block-image"></img>
        </Link>
          <div className="section-title">
            <div className="block-title">
              <h4>{title}</h4>
              <Link to={code}>
                <div style={{color: "black"}}>voir le code</div>
              </Link>
              <div className="git"></div>
            </div>
            <p>{text}</p>
          </div>
        </div>
    </>
  );
}

export default ProjetContainer;
