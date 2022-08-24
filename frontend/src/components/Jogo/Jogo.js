import React from "react";
import "./Jogo.css";
import clouds from "../../assets/clouds.png";

function Jogo() {
  return (
    <div className="jogo">
      <img src={clouds} alt="nuvens" />
    </div>
  );
}

export default Jogo;
