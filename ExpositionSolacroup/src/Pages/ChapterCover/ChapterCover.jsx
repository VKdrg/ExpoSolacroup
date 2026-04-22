import './ChapterCover.css'

export const ChapterCover = () => {

    const [chapters, setChapters] = useState({})

    useEffect(() => {
        fetch('/SiteContent.json')
            .then(res => res.json())
            .then(data => setChapters(data))
            .catch(err => console.error(`Error : ${err}`))
    }, [])

    return (
        <main id='chapter-cover'>
            <h2>{chapters.title}</h2>
            <h3>{chapters.subtitle}</h3>
            <button>suivant</button>
        </main>
    )
}