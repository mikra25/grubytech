import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="nav-list">
                        <li>
                            <NavLink className="nav-link" to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/kategorie">Kategorie</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;