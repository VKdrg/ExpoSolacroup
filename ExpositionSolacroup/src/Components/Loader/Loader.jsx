import { useEffect, useState } from 'react';
import './Loader.css';

export function Loader() {
    const [loading, setLoading] = useState(true)
    const [filled, setFilled] = useState(0)

    useEffect(() => {
        if (filled < 100) {
            const timeout = setTimeout(() => {
                setFilled(prev => prev + 5)
            }, 20)
            return () => clearTimeout(timeout)
        }
    }, [filled]);

    useEffect(() => {
        if (filled === 100) {
            setTimeout(() => {
                document.querySelector('main').style.display = 'none'
            }, 1200);
        }
    }, [filled, setLoading])

    return (
        <>
            <main>
                <div id='loader'>
                    <div
                        id='progressbar'
                        style={{ width: `${filled}%` }}
                    >
                    </div>
                </div>
            </main>
        </>
    )
}