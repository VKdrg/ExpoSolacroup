import "./Transition.css"

import { useEffect, useRef } from "react"

export const Transition = () => {
    const transitionRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (transitionRef.current) {
                transitionRef.current.play()
            }
        }, 10000)

        return () => clearTimeout(timer)
    })

    return (
        <video
            ref={transitionRef}
            muted
            playsInline
        >
            <source src="" type="video/mp4" />
        </video>
    )
}