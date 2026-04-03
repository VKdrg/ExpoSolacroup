import './Menu.css'
import { Link } from "react-router";

export function Menu() {

    
    return (
        <section id="MenuSection">
            <h3>CHAPITRES</h3>
            <p className="body1">FERMER</p>
            <div id="menuContent">
                <Link>
                    {/* <p className=""> { chapterNumber } </p>
                    <p className="body1"> { chapterTitle } </p> */}
                </Link>
            </div>
            <div id="btmLinks">
                <Link to={'https://www.instagram.com/fondationsolacrouphebert/'}>Instagram</Link>
                <Link to={'https://fondation-solacroup-hebert.com/'}>Site de la Fondation</Link>
                <Link to={'https://www.facebook.com/fondationsolacrouphebert'}>Facebook</Link>
            </div>
        </section>
    )
}