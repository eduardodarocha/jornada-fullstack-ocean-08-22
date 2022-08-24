import React, {useState} from "react";
import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import cano from "../../assets/pipe.png";

function Jogo() {
  const [estaPulando, setEstaPulando] = useState(false);
  document.onkeydown = function () {
    
    console.log("OnKeyDown");    
  }

  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="nuvens" />
      <img className="mario" src={mario} alt="mario" />
      <img className="cano" src={cano} alt="cano" />
      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
