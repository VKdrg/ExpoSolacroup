import { createContext, useState } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { Header } from './Pages/Header/Header'
import { Error404 } from './Pages/Error404/Error404'
import { BrowserRouter, Route, Routes } from 'react-router'

// export const Context = createContext()

// function Provider({ children }) {
//   const [loading, setLoading] = useState(true)
//   const [chapters, setChapters] = useState([])

//   fetch('ExpositionSolacroup/SiteContent.json')
//     .then(res => res.json())
//     .then(data => setChapters(data))
//     .catch(err => console.error(`Error: ${err}`))

//   return (
//     <Context.Provider value={{ loading, chapters }}>
//       {children}
//     </Context.Provider>
//   )
// }


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}