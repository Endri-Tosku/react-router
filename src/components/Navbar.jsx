import { Link, NavLink } from "react-router-dom";

function NavBar() {

    // dati per generazione voci menù
    const links = [
        { path: '/', label: 'Home' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/prodotti', label: 'Lista personaggi' }
    ]

    return (
        <nav className="container py-3">
            <ul className="nav nav-pills justify-content-center">
                {links.map((link, i) => (
                    <li className="nav-item" key={i}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                "nav-link" + (isActive ? " active" : "")
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar