import { useState } from "react";
import { Link } from "react-router";

import "./ChapterItem.css"

export function ChapterItem({ joe }) {
    const [chapter, setChapter] = useState([])

    fetch('/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data.chapters))
        .catch(err => console.error(`Error : ${err}`))


    return (
        <Link to={{ pathname: `/chapter-${chapter.id}/content` }}>
            <button>Découvrir</button>
            <img src={`${chapter.imgDesktop}`} alt="" />
            <img src={`${chapter.imgMobile}`} alt="" />
        </Link>
    )
}