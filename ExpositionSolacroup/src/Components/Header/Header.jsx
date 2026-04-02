import { Link, NavLink, useLocation } from 'react-router';
import './Header.css'
import { Menu } from '../Menu/Menu';
import { useEffect } from 'react';
import { Home } from '../../Pages/Home';

export function Header() {

    let icon = 'ExpositionSolacroup/src/assets/logoLightReduced.svg';
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/home") {
            icon = 'ExpositionSolacroup/src/assets/logoLightExtended.svg'
        }
    }, [])
    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }

    return (
        <>
            <nav className='nav-desktop'>
                <Link to="/home">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <Link to="/menu" className='body1'>MENU</Link>
            </nav>

            <nav className='nav-mobile'>
                <Link to="/home">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <i>burger</i>
            </nav>
        </>
    )
}