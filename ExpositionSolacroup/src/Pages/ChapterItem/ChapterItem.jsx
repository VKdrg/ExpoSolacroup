import { UseApplication } from "../../Components/Provider/Provider";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import "./ChapterItem.css";

export const ChapterItem = ({ setModal }) => {
    const { chapters, currentChapter, setCurrentChapter } = UseApplication()

    function handleDiscovery() {
        setModal(prev => !prev)
    }

    return (
        <section id="chapter-item">
            <div className="div-btn-discover">
                <button className="btn btn-discover" onClick={handleDiscovery}>Découvrir</button>
            </div>
            <div className='div-btn-next'>
                <Link className="btn btn-next" to={{ pathname: '/chapter/' + (Number(currentChapter)+1) }}>next</Link>
            </div>
            <video
                id="illu-desktop"
                autoPlay
                loop
                muted
                style={{
                    maxWidth: '102%',
                    left: '0',
                    top: '0'
                }}
            >
                {/* <source src={chapters[0].illuDesktop} />        refaire les illus desktop en 4:3        */}
            </video>
            <video
                id="illu-mobile"
                autoPlay
                loop
                muted
                style={{
                    maxWidth: '125%',
                    left: '-4rem',
                    top: '0'
                }}
            >
                {/* <source src={chapters[4].illuMobile} /> */}
            </video>
        </section >
    )
}