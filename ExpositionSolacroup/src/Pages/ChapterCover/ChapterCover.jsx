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
        <>
            <h2>ChapterTitle</h2>
            <h3>ChapterSubT</h3>
        </>
    )
}