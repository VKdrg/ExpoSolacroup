import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { createContext, useState } from 'react'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import { Menu } from './Components/Menu/Menu'
import { Error404 } from './Pages/Error404/Error404'

export const Context = createContext()

function Provider({ children }) {
  const [loading, setLoading] = useState(true)
  return (
    <Context.Provider value={loading}>
      {children}
    </Context.Provider>
  )
}

fetch('ExpositionSolacroup/SiteContent.json')
  .then(res => res.json())
  .then(data => console.log(data.quote))
  .catch(err => console.error(`Error: ${err}`))

function App() {
  return (
    <>
    <Home />
    {/* <BrowserRouter>
      <Header />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route element={Error404} /> 
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App