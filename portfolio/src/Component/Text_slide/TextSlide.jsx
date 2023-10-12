import React from "react";
import "./TextSlide.css";
import { Link } from "react-router-dom";

function TextSlide() {
  return (
    <>
      <Link to={"mailto:taupinfabien2607@gmail.com"} className="hidden">
        <div className="text-repeat">
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi" }}>
              <span style={{ fontFamily: "kelsi" }}>X&nbsp;</span>
            </span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi" }}>
              <span style={{ fontFamily: "kelsi" }}>X&nbsp;</span>
            </span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi" }}>
              <span style={{ fontFamily: "kelsi" }}>X&nbsp;</span>
            </span>
          </span>
          <span className="text">
            LET'S TALK&nbsp;
            <span style={{ fontFamily: "kelsi" }}>
              <span style={{ fontFamily: "kelsi", color: "white" }}>
                X&nbsp;
              </span>
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}

export default TextSlide;
