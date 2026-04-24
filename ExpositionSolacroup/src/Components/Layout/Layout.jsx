import './Layout.css';

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { Header } from "../Header/Header";
import { MenuItem } from "../MenuItems/MenuItems"

export const Layout = () => {
    const [menuBurger, setMenuBurger] = useState(false)
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        fetch('/SiteContent.json')
            .then(res => res.json())
            .then(data => setChapters(data.chapters))
            .catch(err => console.error(`Error : ${err}`))
    }, [])

    function triggerMenu() {
        setMenuBurger(prev => !prev)
    }

    return (
        <>
            {menuBurger ?
                <div className="modal">
                    <Link className="body1" id='closeMenu' onClick={triggerMenu}>FERMER</Link>
                    <h3>CHAPITRES</h3>
                    <div id='list'>
                        {chapters.map(c => <MenuItem key={c.id} chapter={c} />)}
                    </div>
                    <div id="btmLinks">
                        <Link to="https://www.instagram.com/fondationsolacrouphebert/">Instagram</Link>
                        <Link to="https://fondation-solacroup-hebert.com/">Site de la Fondation</Link>
                        <Link to="https://www.facebook.com/fondationsolacrouphebert">Facebook</Link>
                    </div>
                </div>
                :
                <>
                    <Header triggerMenu={triggerMenu} />
                    <Outlet />
                </>
            }
        </>
    )
}