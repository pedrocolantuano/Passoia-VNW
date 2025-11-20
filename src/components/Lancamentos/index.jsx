// hooks são funçoes especiais do react;
//useState controla os estados de algo na interface
import { useState } from "react";
import "./lancamentos.scss"

//IMPORT DAS IMAGENS:
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";
import baton1 from "../../assets/lanc1.png";
import baton2 from "../../assets/lanc2.png";
import baton3 from "../../assets/lanc3.png";
import estrelas from "../../assets/estrelas.png";
import bolaAzul from "../../assets/bola-azul.png";
import bolaVermelho from "../../assets/bola-vermelha.png";
import bolaMarrom from "../../assets/bola-marrom.png";
import bolaBege from "../../assets/bola-bege.png";

function Lancamentos() {
  //estado inicial
  //cor a variavel inicial, setCor a função atualizadora
  const [cor, setCor] = useState(azul);

  return (
    <section className="lancamento">
      <h2>APROVEITE OS LANÇAMENTOS</h2>

      {/* <button onClick={()=>setCor(azul)}>Azul</button>
        <button onClick={()=> setCor(marrom)}>Marron</button>
        <button onClick={()=> setCor(base)}>Base</button>  */}

      <div className="principal">
        <div className="batons">
          <img src={baton1} alt="Modelos de batom 1" />
          <img src={baton2} alt="Modelos de batom 2" />
          <img src={baton3} alt="Modelos de batom 3" />
        </div>

        <div className="img-principal">
          <img src={cor} alt="Modelo usando o batom" />
        </div>
        <div className="interativo">
          <img id="estrela" src={estrelas} alt="Feedback de 5 estrelas" />
          <h1>Matte Premium</h1>
          <p id="cores">Cores disponíveis</p>
          <div className="cores">
            <button onClick={()=>setCor(azul)}><img src={bolaAzul} alt="Bola com a cor do batom azul" /></button>
            <button onClick={()=>setCor(vermelho)}><img src={bolaVermelho} alt="Bola com a cor do batom vermelho" /></button>
            <button onClick={()=>setCor(marrom)}><img src={bolaMarrom} alt="Bola com a cor do batom marrom" /></button>
            <button onClick={()=>setCor(base)}><img src={bolaBege} alt="Bola com a cor do batom bege" /></button>
          </div>
          <h2>Descrição</h2>
          <p id="descric">O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
        </div>
      </div>
    </section>
  );
}

export default Lancamentos;