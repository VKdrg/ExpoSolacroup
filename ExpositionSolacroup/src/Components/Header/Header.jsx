import { Link, NavLink, useLocation } from 'react-router';
import './Header.css'
import { Menu } from '../../Pages/Menu/Menu';
import { useEffect } from 'react';

export function Header() {

    let icon = 'ExpositionSolacroup/src/assets/logoLightReduced.svg';
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/home") {

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
                <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                <Link to="" className='body1'>MENU</Link>
            </nav>

            <nav className='nav-mobile'>
                <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                <i>burger</i>
            </nav>
        </>
    )
}