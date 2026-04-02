import { Link } from "react-router";

export function Menu() {

    
    return (
        <section id="MenuSection">
            <h1>CHAPITRES</h1>
            <p className="close body1">FERMER</p>
            <div id="menuCore">
                <Link>reqt
                    {/* <p className=""> { chapterNumber } </p>
                    <p className=""> { chapterTitle } </p> */}
                </Link>
            </div>
            <div id="btmLinks">
                <Link to={'https://www.instagram.com/fondationsolacrouphebert/'}>Instagram</Link>
                <Link to={'https://fondation-solacroup-hebert.com/'}>Site de la Fondation</Link>
                <Link to={'https://www.facebook.com/fondationsolacrouphebert'}>Instagram</Link>
            </div>
        </section>
    )
}