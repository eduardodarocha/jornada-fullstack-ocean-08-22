import React, { useRef, useState } from "react";
import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import gameOver from "../../assets/game-over.png";
import cano from "../../assets/pipe.png";

function Jogo() {
  const [estaPulando, setEstaPulando] = useState(false);
  const [estaMorto, setEstaMorto] = useState(false);

  const marioRef = useRef();
  const canoRef = useRef();

  function marioEstaNoCano() {
    const mario = marioRef.current;
    const cano = canoRef.current;

    if (!mario || !cano) {
      return;
    }

    return (
      cano.offsetLeft > mario.offsetLeft &&
      cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
      mario.offsetTop + mario.offsetHeight > cano.offsetTop
    );
  }

  setInterval(() => {
    const estaNoCano = marioEstaNoCano();
    // console.log("Mario está no cano", valor);

    if (!estaNoCano) {
      return;
    }
    setEstaMorto(true);
  }, 100);

  console.log({ estaMorto });

  document.onkeydown = function () {
    console.log("OnKeyDown");
    setEstaPulando(true);
    setTimeout(() => {
      setEstaPulando(false);
    }, 700);
  };

  let marioClassName = "mario";

  if (estaPulando) {
    marioClassName = "mario mario-pulo";
  }

  // console.log(estaPulando);

  const marioImage = estaMorto ? gameOver : mario;

  const pararAnimacao = estaMorto ? "parar-animacao" : "";

  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="nuvens" />
      <img ref={marioRef} className={marioClassName} src={marioImage} alt="mario" />
      <img ref={canoRef} className={"cano " + pararAnimacao } src={cano} alt="cano" />
      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
