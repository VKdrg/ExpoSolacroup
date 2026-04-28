import { Link } from "react-router"
import "./Redirect.css"

export const Redirect = () => {

    return (
        <section id="redirect">
            <div id="titles">
                <h2>Nos valeurs sont le coeur battant de la Fondation.</h2>
                <h3>Elles guident chaque action, chaque projet, et chaque réussite.</h3>
            </div>
            <Link className="btn body1" to="https://fondation-solacroup-hebert.com/">Retour vers le site principal.</Link>
        </ section>
    )
}