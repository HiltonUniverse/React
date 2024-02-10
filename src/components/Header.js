import "./Header.css"
import Logo from '../assets/Logo.jpeg'

export const Header = () => {
    return (
        <header>
            <img src={Logo} alt="" />
            <a className="title" href="/">Home</a>
        </header>
    )
}
