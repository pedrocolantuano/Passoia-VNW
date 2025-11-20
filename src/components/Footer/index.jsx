import "./footer.css";

import master from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

function Footer() {
    return (
        <footer>
            <div className="footer-geral">
                <div className="atendimento">
                    <h1>ATENDIMENTO</h1>
                    <p className="p-atendimento">Fale Conosco</p>
                    <p className="p-atendimento">Perguntas Frequentes</p>
                    <p className="p-atendimento">Meus Pedidos</p>
                    <p className="p-atendimento">Nossas Lojas</p>
                </div>
                <div className="pagamento">
                    <h1>FORMAS DE PAGAMENTO</h1>
                    <div className="icons-pagamento">
                        <img src={master} alt="Logo da mastercard"/>
                        <img id="visa" src={visa} alt="Logo da Visa"/>
                        <img src={pix} alt="Logo do PIX"/>
                        <img id="boleto" src={boleto} alt="Icone representando o boleto"/>
                    </div>
                </div>
                <div className="sociais">
                    <h1>SIGA-NOS NAS REDES SOCIAIS</h1>
                    <div className="icons-sociais">
                        <img src={instagram} alt="Icone do Instagram" />
                        <img src={facebook} alt="Icone do Facebook" />
                        <img src={youtube} alt="Icone do Youtube" />
                        <img src={twitter} alt="Icone do twitter" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;