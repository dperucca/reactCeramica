import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            Ceramica 25 de Mayo
            <button>ceramicas</button>
            <button>materiales</button>
            <button>envios</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar