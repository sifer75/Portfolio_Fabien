import "./Projet.css";
import ProjetContainer from "../ProjetContainer/ProjetContainer";
import Puissance from "../../assets/puissance.png";
import Yugioh from "../../assets/yugioh.png";
import Otium from "../../assets/otium.png";

function Projet({ sectionRef }) {
  return (
    <>
      <div className="page-projet" ref={sectionRef}>
        <div className="group-title">
          <div className="projet-title">PORTFOLIO</div>
          <div className="logo">MERN STACK</div>
          <h3>Mes projets récents</h3>
        </div>
        <div className="container-projet">
          <ProjetContainer
          site={"https://sifer75.github.io/puissance4"}
            showImage={Puissance}
            title={"Puissance 4"}
            link={"https://github.com/sifer75/puissance4"}
            text={"Clone du jeu en utilisant la manipulation DOM."}
          ></ProjetContainer>
          <ProjetContainer
          site={"https://yu-gi-oh-oh-oh.netlify.app"}
            showImage={Yugioh}
            title={"YU-GI-OH"}
            link={"https://github.com/sifer75/YU-GI-OH/tree/main/YU-GI-OH"}
            text={"Utilisation d’une API pour la database."}
          ></ProjetContainer>
          <ProjetContainer
          site={"https://stupendous-hamster-5137f5.netlify.app/"}
            showImage={Otium}
            title={"Otium"}
            link={"https://github.com/sifer75?tab=repositories"}
            text={"Application Full Stack, utilisant React JS."}
          ></ProjetContainer>
        </div>
      </div>
    </>
  );
}

export default Projet;
