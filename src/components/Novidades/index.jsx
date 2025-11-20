import "./novidades.css";

import novidades from "../../assets/novidades.png";

function Novidades() {
    return(
        <section className="novidades">
            <h1>NOVIDADES PARA VOCÊ</h1>
            <img src={novidades} alt="Banner com as tendências de maquiagem atuais"/>
        </section>
    );
}

export default Novidades;