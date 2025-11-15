import img1 from "../../assets/labios.png"
import img2 from "../../assets/olhos.png"
import img3 from "../../assets/rosto.png"
import img4 from "../../assets/tendencia.png"

import "./looks.css"

function Looks(){
    return(
        <>
        <section class = "looks">
            <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
            <div class="cards">
                <div class="card">
                    <img src={img1} alt="Imagem de mulher passando batom nos labios" />
                </div>
                <div class="card">
                    <img src={img2} alt="Imagem de olhos maqueados" />
                </div>
                <div class="card">
                    <img src={img3} alt="Imagem de mulher passando blush no rosto" />
                </div>
                <div class="card">
                    <img src={img4} alt="Mulher mostrando difersas maquiagens" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Looks