import React from "react";
import "./Connection.css";
import { Link } from "react-router-dom";

function Connection({ logo, link }) {
  return (
    <>
      <Link to={link}>
        <div className="connection">
          <img className="footer-logo" src={logo}></img>
        </div>
      </Link>
    </>
  );
}

export default Connection;
