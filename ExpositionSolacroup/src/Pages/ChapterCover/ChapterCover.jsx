import { useSearchParams } from 'react-router'
import { UseApplication } from '../../Components/Provider/Provider'
import { Transition } from '../../Components/Transition/Transition'
import './ChapterCover.css'
import { useState } from 'react'

export const ChapterCover = ({ setCover }) => {
    const { chapters, transition, currentChapter } = UseApplication()

    function handleClick() {
        setCover(prev => !prev)
    }

    return (

        transition ? 
            <Transition /> 
            :
            <section id='chapter-cover'>
                <h2>ChapterCover Component</h2>
                {/* <h2>{chapters[currentChapter].title}</h2> */}
                {/* <h3>{chapters[currentChapter].subtitle}</h3> */}
                <div className='div-btn-next'>
                    <button className="btn btn-next" onClick={handleClick}>next</button>
                </div>
            </section>

    )
}