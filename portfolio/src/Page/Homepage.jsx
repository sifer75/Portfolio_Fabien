import React, { useRef } from "react";
import Title from "../Component/Title/Title";
import Menu from "../Component/Menu/Menu";
import Description from "../Description/Description";
import Projet from "../Component/Projet/Projet";
import Competence from "../Component/Competence/Competence";
import Footer from "../Component/Footer/Footer";

function Homepage() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const projetRef = useRef();
  const competenceRef = useRef();
  const footerRef = useRef();

  return (
    <>
      <Menu
        sectionRef={{
          "Accueil": titleRef,
          "A propos": descriptionRef,
          "Portfolio": projetRef,
          "Compétences": competenceRef,
          "Me Contacter": footerRef,
        }}
      ></Menu>
      <Title sectionRef={titleRef}></Title>
      <Description sectionRef={descriptionRef}></Description>
      <Projet sectionRef={projetRef}></Projet>
      <Competence sectionRef={competenceRef}></Competence>
      <Footer sectionRef={footerRef}></Footer>
    </>
  );
}

export default Homepage;
