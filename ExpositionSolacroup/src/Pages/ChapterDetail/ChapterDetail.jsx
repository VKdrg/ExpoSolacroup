import { useEffect, useState } from "react"
import { Link } from "react-router"
// import { changeModal } from "../ChapterItem/ChapterItem"

import "./ChapterDetail.css"
import { UseApplication } from "../../Components/Provider/Provider"


export const ChapterDetail = ({ setModal }) => {
    const { chapters, currentChapter } = UseApplication()

    function handleClick() {
        setModal(prev => !prev)
    }

    return (
        <section id="chapter-detail">
            <div id="titles">
                <h2>{chapters[0].title}</h2>
                <h3>{chapters[0].subtitle}</h3>
            </div>
            <button className="btn" id="btn-play">Écouter l'histoire</button>
            <p className="quotes">{chapters[0].quote}</p>
            <div id="columns-content">
                <p>{chapters[0].content.col1}</p>
                <p>{chapters[0].content.col2}</p>
                <p>{chapters[0].content.col3}</p>
            </div>
            <div className='div-btn-close'>
                <button className="btn btn-close" onClick={handleClick}>Fermer</button>
            </div>
        </section>
    )
}