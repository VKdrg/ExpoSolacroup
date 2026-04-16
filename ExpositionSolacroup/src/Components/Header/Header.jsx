import './Header.css';
import '/src/index.css';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

function triggerMenu(e) {
    const modal = document.getElementsByClassName('modal')
    modal.classList.toggle('change-modal')
    // e.preventDefault()
}

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
                <div className='modal'>
                    <div className='menu'>
                        <p className="body1" id='closeMenu' onClick={triggerMenu}>FERMER</p>
                        <h3>CHAPITRES</h3>
                        <div id="menuContent">
                            <Link>
                                {/* <p className="chNb"> { chapterNumber } </p>
                                <p className="body1"> { chapterTitle } </p> */}
                            </Link>
                        </div>
                        <div id="btmLinks">
                            <Link to={'https://www.instagram.com/fondationsolacrouphebert/'}>Instagram</Link>
                            <Link to={'https://fondation-solacroup-hebert.com/'}>Site de la Fondation</Link>
                            <Link to={'https://www.facebook.com/fondationsolacrouphebert'}>Facebook</Link>
                        </div>
                    </div>
                </div>
                <Link className='body1' onClick={triggerMenu}>MENU</Link>
            </nav>

            {/* <nav className='nav-mobile'>
                <Link to="/">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <i className="body1 fa-solid fa-bars" title='burger menu icon, click to open menu'></i>
            </nav> */}
        </>
    )
}

