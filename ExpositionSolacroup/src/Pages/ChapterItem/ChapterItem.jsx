import { useState } from "react";
import { Link } from "react-router";

import "./ChapterItem.css"

export const ChapterItem = () => {
    const [chapter, setChapter] = useState([])

    fetch('/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data.chapters))
        .catch(err => console.error(`Error : ${err}`))


    return (
        <>
            <button className="btn-discover">Découvrir</button>
            <button className="btn-next">v</button>
            <video>
                <source src={chapter.illuDesktop} />
            </video>
            <video>
                <source src={chapter.illuMobile} />
            </video>
        </>
    )
}