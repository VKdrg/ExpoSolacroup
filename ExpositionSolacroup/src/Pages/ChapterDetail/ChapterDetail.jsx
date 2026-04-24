
import { changeModal } from "../ChapterItem/ChapterItem"
import "./ChapterDetail.css"


export const ChapterDetail = () => {
    // blue screen (blend-mode : multiply) with title + sub + quote + columns

    const [chapter, setChapter] = useState([])

    fetch('/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data.chapters))
        .catch(err => console.error(`Error : ${err}`))
    
    const audio = chapter.audio

    return (
        <section id="chapter-detail">
            <h2>{chapter.title}</h2>
            <h3>{chapter.subtitle}</h3>
            <p className="quotes">{chapter.quote}</p>
            <button className="btn-audio" onClick={audio.play()}>Écouter l'histoire <i class="fa-thin fa-play"></i></button>
            <div id="columns-content">
                <p className="body1">{chapter.content.col1}</p>
                <p className="body1">{chapter.content.col2}</p>
                <p className="body1">{chapter.content.col3}</p>
            </div>
            <button className="btn-close" onClick={changeModal()}>Fermer</button>
        </section>
    )
}