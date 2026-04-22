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

    // setTimeout(Loader(), () => {
    //     window.location.replace('/home');
    // }, 5000);

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

// function DelayedVideo() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (videoRef.current) {
//                 videoRef.current.play();
//             }
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <video
//             ref={videoRef}
//             muted
//             playsInline
//         >
//             <source src="Animation-clin-d-oeil.mp4" type="video/mp4" />
//         </video>
//     );
// }