import "./Transition.css"

import { useEffect, useRef, useState } from "react"

export const Transition = () => {
    const transitionRef = useRef(null)
    const { transition } = UseApplication()


    useEffect(() => {
        const timerPlay = setTimeout(() => {
            if (transitionRef.current) {
                transitionRef.current.play()
            }
        }, 1)

        const AutoHideVideo = ({ delay = 10000 }) => {
            useEffect(() => {
                const timer = setTimeout(() => {
                    settransi = false
                }, delay);

                return () => clearTimeout(timer)
            })
        }

        return () => clearTimeout(timerPlay)
    })

    return (
        <video id="transition-video"
            ref={transitionRef}
            muted
            playsInline
        >
            <source src="/transition.mp4" type="video/mp4" />
        </video>
    )
}