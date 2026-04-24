import { useState } from "react";
import { Link } from "react-router";
import { ChapterDetail } from "../ChapterDetail/ChapterDetail";

import "./ChapterItem.css"

export function changeModal() {
    document.querySelector('.modal-detail').classList.toggle('change-modal-detail')
}


export const ChapterItem = () => {
    const [chapter, setChapter] = useState([])

    fetch('/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data.chapters))
        .catch(err => console.error(`Error : ${err}`))


    return (
        <section id="chapter-item">
            <div className="modal-detail">{<ChapterDetail />}</div>
            <Link className="btn-discover" onClick={changeModal()}>Découvrir</Link>
            <button className="btn-next">v</button>
            <video>
                <source src={chapter.illuDesktop} />
            </video>
            <video>
                <source src={chapter.illuMobile} />
            </video>
        </section>
    )
}