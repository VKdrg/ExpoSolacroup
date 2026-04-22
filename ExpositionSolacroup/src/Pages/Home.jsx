import './Home.css';
import { useEffect, useRef } from "react";
import { Loader } from '../Components/Loader/Loader';

function DelayedVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <video
            ref={videoRef}
            muted
            playsInline
        >
            <source src="Animation-clin-d-oeil.mp4" type="video/mp4" />
        </video>
    );
}

export function Home() {

    return (
        <main>
            <Loader />
            <section id='landing-screen'>
                <div className='titles'>
                    <h1>Marie-Thérèse<br />SOLACROUP</h1>
                    <p>UNE VIE AU SERVICE DES AUTRES</p>
                </div>
                {/* <div className='btndiv'><button>suivant</button></div> */}
                <DelayedVideo />
            </section>
        </main>
    )
}