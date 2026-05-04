import { Link, useNavigate } from "react-router";
import { UseApplication } from "../../Components/Provider/Provider";

import "./ChapterItem.css";

export const ChapterItem = ({ setModal }) => {
    const { chapters, currentChapter, setCurrentChapter } = UseApplication()
    const navigate = useNavigate()


    function handleDiscovery() {
        setModal(prev => !prev)
    }

    let illuSrc = `${chapters[currentChapter].illuDesktop}`
    if (screen.width < 1024) {
        illuSrc.replace('illuDesktop', 'illuMobile')
    }

    function handleClick() {
        setCurrentChapter(Number(currentChapter) + 1)
        if (chapter = 5) {
            window.location.replace('/redirect')
        }
    }

    return (
        <section id="chapter-item">
            <div className="div-btn-discover">
                <button className="btn btn-discover" onClick={handleDiscovery}>Découvrir</button>
            </div>
            <div className='div-btn-next'>
                <Link className="btn btn-next" onClick={handleClick} to={{ pathname: `/chapter/${currentChapter + 1}` }}>next</Link>
            </div>
            <div id="video-container">
                <video
                    autoPlay
                    muted
                    loop
                >
                    <source src={illuSrc} />
                </video>
            </div>
        </section >
    )
}