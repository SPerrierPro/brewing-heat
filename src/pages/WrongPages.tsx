import { NavLink } from "react-router";
import "../style/WrongPage.css"

function WrongPage() {
    return (
        <section className="wrong-way">
            <h1>Hu-ho, it seems you lost your way</h1>
            <p>Click here to go back home : </p>
            <NavLink to="/" className="home-redirect">Home</NavLink>
        </section>
    )
}

export default WrongPage;