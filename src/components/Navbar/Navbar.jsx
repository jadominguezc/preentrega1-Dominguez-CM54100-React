import logootaku from "../../assets/logootaku.png"
import { TiShoppingCart } from "react-icons/ti";
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img src={logootaku} className="otakulogo"alt="Logo" />
        </div>
        <ul className="navbar-ul">
            <li className="navbar-options">
                <a href="#">INICIO</a>
            </li>
            <li className="navbar-options">
                <a href="#">MENÚ</a>
            </li>
            <li className="navbar-options">
                <a href="#">NOSOTROS</a>
            </li>
            <li className="navbar-options">
                <a href="#">EVENTOS</a>
            </li>
            <li className="navbar-options">
                <a href="#">CONTACTO</a>
            </li>
        </ul>
        <div className="cart">
            <TiShoppingCart size="25px"/>
            <span className="full-cart">2</span>
        </div>

    </nav>
  )
}

export default Navbar
