import { NavLink } from "react-router"
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import "../style/Navbar.css"

function Navbar() {
    const { cartCount } = useContext(CartContext);

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/src/assets/logo.svg" alt="Brewing Heat Logo" />
                <h1>Brewing Heat</h1>
            </div>
            <nav>
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="/about" className="navlink">About</NavLink>
            </nav>

            <caption className="cart-display">
                <img src="/src/assets/cart-icon.svg" alt="Coffee icon" />
                {cartCount ? (<p className="cart-count">{cartCount}</p>) :
                    (<p className="cart-count">0</p>)
                }
            </caption>
        </div>
    )
}

export default Navbar;