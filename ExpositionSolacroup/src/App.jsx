import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Cursor } from './Components/Cursor/Cursor'

function App() {



  return (

    <Cursor />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/menu' element={<Menu />} />
    //   </Routes>
    // </BrowserRouter>


    // <>
    // <section  className='landing-screen'>
    //   <div className='titles'>
    //     <h1>Marie-Thérèse<br />SOLACROUP</h1>
    //     <p>Une vie au service des autres</p>
    //   </div>
    //   {/* <video src='ExpositionSolacroup/public/WINK-WINK-Anim.mp4' alt='winkwink'></video> */}
    // </section>
    // </>
  )
}

export default App