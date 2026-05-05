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
        else if ((location.pathname.includes("/chapter")) || (location.pathname === "/redirect")) {
            setIcon('/logoDarkReduced.svg')
            document.getElementById('menu').style.color = "var(--dark-blue)"
        }
        else if(location.pathname === "/mentions-legales") {
            document.getElementById('nav').style.backgroundColor = "var(--dark-blue)"
        }
    }, [])

    return (
        <>
            <nav id='nav'>
                <Link to="/">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <Link id='menu' className='body1' onClick={triggerMenu}>MENU</Link>
            </nav>
        </>
    )
}

