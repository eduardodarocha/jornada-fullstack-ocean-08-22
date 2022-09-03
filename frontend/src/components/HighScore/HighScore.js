import "./HighScore.css";

function HighScore(props) {

fetch("http://localhost:3333/pontuacoes").then();

  return ( 
  <div className="HighScore" >
    <div>
      Você fez <b>{props.pontos}</b> pontos!
    </div>
    <div>
      <h2>HighScore</h2>
    <div>Paulo - 90 pontos</div>
    <div>João - 80 pontos</div>
    <div>Teresa - 60 pontos</div>
  </div>
  <div>
    <h2>Registre sua pontuação!</h2>
    <form>
      <input type="text" placeholder="Digite seu nome" />
      <input type="submit" value="Enviar" />
    </form>
  </div>
  </div>
  );
}
export default HighScore;