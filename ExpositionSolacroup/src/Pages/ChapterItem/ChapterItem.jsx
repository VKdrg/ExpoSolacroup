import { useState } from "react";
import { Link } from "react-router";

export function ChapterItem({ chapter }) {
    const [chapter, setChapter] = useState([])

    fetch('ExpositionSolacroup/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data))


    return (
        <Link to={{ pathname: `/chapter-${chapter.chapterNumber}` }}>
            <button>Voir plus</button>
            <img src={`${chapter.imgDesktop}`} alt="" />
            <img src={`${chapter.imgMobile}`} alt="" />
            curseur
        </Link>
    )
}