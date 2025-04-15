import logo from '../assets/logo.svg';
import { NavLink } from 'react-router';

function Header() {
 return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Logo" />
        <nav className='header__navbar'>
            <NavLink className='header__navbar__link' to="/home">Accueil</NavLink>
            <NavLink className='header__navbar__link' to="/about">A propos</NavLink>
        </nav>
    </header>
 )
}

export default Header;