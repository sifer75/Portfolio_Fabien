import React from "react";
import Skill from "../Skill/Skill";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/Javascript.png";
import Node from "../../assets/Node.png";
import Lreact from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png"
import Mongo from "../../assets/mongo.png";
import Express from "../../assets/express.png";
import Render from "../../assets/render.png";
import Netifly from "../../assets/netifly.png";
import "./ContainerSkill.css";

function ContainerSkill() {
  return (
    <>
        <div className="container-skill">
          <h2>Front-End</h2>
          <Skill logoSkill={Html} title={"HTML"}></Skill>
          <Skill logoSkill={Css} title={"CSS"}></Skill>
          <Skill logoSkill={Javascript} title={"Javascript"}></Skill>
          <Skill logoSkill={Node} title={"Node"}></Skill>
          <Skill logoSkill={Lreact} title={"React"}></Skill>
          <Skill logoSkill={Tailwind} title={"Tailwind"}></Skill>
        </div>
        <div className="container-skill">
          <h2>Back-End</h2>
          <Skill logoSkill={Mongo} title={"Mongo DB"}></Skill>
          <Skill logoSkill={Express} title={"Express"}></Skill>
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
