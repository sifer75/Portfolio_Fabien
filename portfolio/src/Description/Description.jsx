import React, { useRef } from "react";
import "./Description.css";
import { Link } from "react-router-dom";

function Description({ sectionRef }) {
  return (
    <>
      <div className="page-description" ref={sectionRef}>
        <div className="container-description">
          <div className="description">
            <h3>salut moi c'est fabien</h3>
            <h4>je suis developpeur front end</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
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
