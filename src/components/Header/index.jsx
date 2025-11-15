import logo from "../../assets/logo.png"
import "./header.css"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo marca da pagina" class="header-img" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADES</li>
            </ul>

        </header>
    )
}

export default Header