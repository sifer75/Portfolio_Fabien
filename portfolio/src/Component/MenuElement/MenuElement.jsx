import React, { useState } from "react";
import "./menuElement.css";

function MenuElement({ setSelectedElement }) {

  return (
    <>
      <div className="list-menu">
        <button className="menuElement" name="el" onClick={(e) => {setSelectedElement(e)}}>Home</button>
        <button className="menuElement" name="el" onClick={(e) => {setSelectedElement(e)}}>accueil</button>
        <button className="menuElement" name="el" onClick={(e) => {setSelectedElement(e)}}>Portfolio</button>
        <button className="menuElement" name="el" onClick={(e) => {setSelectedElement(e)}}>Compétences</button>
        <button className="menuElement" name="el" onClick={(e) => {setSelectedElement(e)}}>Me Contacter</button>
      </div>
    </>
  );
}

export default MenuElement;
