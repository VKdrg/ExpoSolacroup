import './Home.css'

export function Home() {

    return (
        <>
            <section id='landing-screen'>
                <div className='titles'>
                    <h1>Marie-Thérèse<br />SOLACROUP</h1>
                    <p>UNE VIE AU SERVICE DES AUTRES</p>
                </div>
                <video autoPlay muted>
                    <source src="Animation-clin-d-oeil.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    )
}