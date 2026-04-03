import '/src/index.css';
import './Header.css';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';


export function Header() {

    const [icon, setIcon] = useState('/logoLightReduced.svg');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setIcon('/logoLightExtended.svg')
        }
    }, [])

    return (
        <>
            <nav className='nav-desktop'>
                <Link to="/">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <p className='body1'>MENU</p>
            </nav>

            <nav className='nav-mobile'>
                <Link to="/">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <icon className="body1">☰</icon>
                {/* <i className="fa-solid fa-bars body1">☰</i> */}
            </nav>
        </>
    )
}

