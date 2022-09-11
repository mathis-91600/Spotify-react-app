import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                    <Link to="/Rechercher">Rechercher</Link>
                    <Link to="/Bibliotheque">Bibliothèque</Link>
                    <Link to="/TitresLike">Titres Likés</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar