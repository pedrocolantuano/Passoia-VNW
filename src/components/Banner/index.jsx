import banner from "../../assets/Banner.png"
import "./banner.css"
function Banner(){
    return(
        <>
        <section class="banner">
            <img src={banner} alt="Banner da pagina" class="banner-img"/>
        </section>
        </>
    )
}

export default Banner