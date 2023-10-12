import React, { useRef } from "react";
import "./Footer.css";
import TextSlide from "../Text_slide/TextSlide";
import Connection from "../Connection/Connection";
import Git from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.png";
import Codewar from "../../assets/codewar.png";

function Footer({ sectionRef }) {
  return (
    <>
      <div className="PageFooter" ref={sectionRef}>
        <TextSlide></TextSlide>
        <div className="section-connection">
          <Connection logo={Git} link={"https://github.com/sifer75"}></Connection>
          <Connection logo={Linkedin} link={"https://www.linkedin.com/in/fabien-taupin/"}></Connection>
          <Connection logo={Codewar} link={"https://www.codewars.com/users/sifer75"}></Connection>
        </div>
      </div>
    </>
  );
}

export default Footer;
