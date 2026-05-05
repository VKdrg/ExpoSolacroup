import { UseApplication } from '../../Components/Provider/Provider'
import './ChapterCover.css'

export const ChapterCover = ({ setCover }) => {
    const { chapters, currentChapter } = UseApplication()

    function handleClick() {
        setCover(prev => !prev)
    }

    return (
        <section id='chapter-cover'>
            <h2>{chapters[currentChapter].title}</h2>
            <h3>{chapters[currentChapter].subtitle}</h3>
            <div className='div-btn-next'>
                <button className="btn btn-next" onClick={handleClick}>next</button>
            </div>
        </section>
    )
}