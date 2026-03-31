import { Link, NavLink } from 'react-router';
import './Header.css'
import { Menu } from '../Menu/Menu';

export function Header() {
    switch (key) {
        case value:

            break;

        default:
            break;
    }
    return (
        <>
            <nav className='nav-desktop'>
                <img src="logo" alt="" />
                <Link to={Menu} className='body1'>MENU</Link>
            </nav>

            <nav className='nav-mobile'>
                <img src="logo" alt="" />
                <i>burger</i>
            </nav>
        </>
    )
}