import logo from '../assets/logo.svg';
import { NavLink } from 'react-router';

function Header() {
 return (
    <header>
        <img src={logo} alt="Logo" />
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
 )
}

export default Header;