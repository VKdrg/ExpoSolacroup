import { UseApplication } from "../../Components/Provider/Provider";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import "./ChapterItem.css";

export const ChapterItem = ({ setModal }) => {
    const { chapters, currentChapter, setCurrentChapter } = UseApplication();

    function handleDiscovery() {
        setModal(prev => !prev);
    }

    return (
        <section id="chapter-item">
            <div className="div-btn-discover">
                <button className="btn btn-discover" onClick={handleDiscovery}>Découvrir</button>
            </div>
            <div className='div-btn-next'>
                <Link className="btn btn-next" to={{ pathname: '/chapter/' + (Number(currentChapter)+1) }}>Continuer</Link>
            </div>
            <video
                id="illu-desktop"
                autoPlay
                loop
                muted
            >
                <source src={chapters[currentChapter].illuDesktop} />
            </video>
        </section >
    )
}