import React, { useState, useRef } from "react";
import "./Title.css";
import ChangeBackgroundColor from "../ChangeBackgroundColor/ChangeBackgroundColor";

function Title({ sectionRef }) {
  const [nextColor, setNextColor] = useState(0);
  const [nextText, setNextText] = useState(0);
  return (
    <>
      <div className="page-title" ref={sectionRef}>
      <div className="container-title">
        <div className="title-title">FRONT-END DEV</div>
        <ChangeBackgroundColor
          nextColor={nextColor}
          setNextColor={setNextColor}
          nextText={nextText}
          setNextText={setNextText}
        ></ChangeBackgroundColor>
      </div>
      </div>
    </>
  );
}

export default Title;
