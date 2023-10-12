import React, { useRef } from "react";
import "./Footer.css";
import TextSlide from "../Text_slide/TextSlide";
import Connection from "../Connection/Connection";
import git from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.png";
import prout from "../../assets/jesaispas.jpg";

function Footer({ sectionRef }) {
  return (
    <>
      <div className="PageFooter" ref={sectionRef}>
        <TextSlide></TextSlide>
        <div className="section-connection">
          <Connection logo={git} link={"https://github.com/sifer75"}></Connection>
          <Connection logo={Linkedin} link={"https://www.linkedin.com/in/fabien-taupin/"}></Connection>
          <Connection logo={prout} link={""}></Connection>
        </div>
      </div>
    </>
  );
}

export default Footer;
