import Logo from "../assets/logo.png"

import { Link, NavLink } from "react-router-dom"

// Link and NavLink are used to navigate between component when clicking links in the website.
// we do not use <a> tag becaus that causes the entire website to reload. We only use <a> tag
// when we want to redirect to a different page: facebook, linkedin, etc..
// Also note, we do not use href with Link, we use "to".
// Then Note for the "/" NavLink, we use "end" at the last. This is to ensure the "/" does not
// match "/" of products or "/" contact.

//Note: Nav and NavLink are great when working with our own component links.
export const Header = () => {
    return (
        <header>
            <Link to="" className="logo">
                <img src={Logo} alt="Routemate Logo" />
                <span>Routemate</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/products" className="link">Products</NavLink>
                <NavLink to="/contact" className="link">Contact</NavLink>
            </nav>
        </header>
    )
}
