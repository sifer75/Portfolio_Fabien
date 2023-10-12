import React from "react";
import Skill from "../Skill/Skill";
import Html from "../../assets/HTML.jpg";
import Css from "../../assets/CSS.jpg";
import Node from "../../assets/Node.jpg";
import Lreact from "../../assets/React.jpg";
import Mongo from "../../assets/Mongo.jpg";
import Render from "../../assets/Render.jpg";
import Netifly from "../../assets/Netifly.jpg";
import "./ContainerSkill.css";

function ContainerSkill() {
  return (
    <>
        <div className="container-skill">
          <h2>Front-End</h2>
          <Skill logoSkill={Html} title={"HTML"}></Skill>
          <Skill logoSkill={Css} title={"CSS"}></Skill>
          <Skill logoSkill={Node} title={"Node"}></Skill>
          <Skill logoSkill={Lreact} title={"React"}></Skill>
          <Skill logoSkill={Node} title={"Tailwind"}></Skill>
        </div>
        <div className="container-skill">
          <h2>Back-End</h2>
          <Skill logoSkill={Mongo} title={"Mongo DB"}></Skill>
          <Skill logoSkill={"http://www.w3.org/2000"} title={"Express"}></Skill>
        </div>
        <div className="container-skill">
          <h2>Déploiement</h2>
          <Skill logoSkill={Netifly} title={"Netifly"}></Skill>
          <Skill logoSkill={Render} title={"Render"}></Skill>
        </div>
    </>
  );
}

export default ContainerSkill;
