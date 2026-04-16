import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './Components/Header/Header'
// import { Menu } from './Components/Menu/Menu'
import { Home } from './Pages/Home'
import { Layout } from './Components/Layout/Layout'

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
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}