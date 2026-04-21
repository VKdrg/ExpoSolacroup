import './Header.css';
import '/src/index.css';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';



export const Header = ({ triggerMenu }) => {
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
                <Link className='body1' onClick={triggerMenu}>MENU</Link>
            </nav>
        </>
    )
}

