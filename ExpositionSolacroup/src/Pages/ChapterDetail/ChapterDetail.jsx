import "./ChapterDetail.css"

export const ChapterDetail = () => {
    // blue screen (blend-mode : multiply) with title + sub + quote + columns

    const [chapter, setChapter] = useState([])

    fetch('/SiteContent.json')
        .then(res => res.json())
        .then(data => setChapter(data.chapters))
        .catch(err => console.error(`Error : ${err}`))

    return (
        <section id="chapter-detail">
            <h2>{chapter.title}</h2>
            <h3>{chapter.subtitle}</h3>
            <button className="btn-audio">{chapter.audio}</button>
            <div id="columns-content">
                <p className="body1">{chapter.content.col1}</p>
                <p className="body1">{chapter.content.col2}</p>
                <p className="body1">{chapter.content.col3}</p>
            </div>
            <button className="btn-close">Fermer</button>
        </section>
    )
}