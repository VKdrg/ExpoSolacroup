import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, data, Route, Routes } from 'react-router'
import './App.css'
import { Layout } from './Components/Layout/Layout'
import { Home } from './Pages/Home'
import { ChapterCover } from './Pages/ChapterCover/ChapterCover'
import { ChapterItem } from './Pages/ChapterItem/ChapterItem'
import { ChapterDetail } from './Pages/ChapterDetail/ChapterDetail'
import { Redirect } from './Pages/Redirect/Redirect'

export const Context = createContext()

function Provider({ children }) {
  const [chapters, setChapters] = useState({})

  useEffect(() => {
    fetch('/SiteContent.json')
      .then(res => res.json())
      .then(data => setChapters(data.chapters))
      .catch(err => console.error(`Error : ${err}`))
  }, [])

  return (
    <Context.Provider value={{ chapters }}>
      {children}
    </Context.Provider>
  )
}


export function App() {

  const [chapters, setChapters] = useState({})

  useEffect(() => {
    fetch('/SiteContent.json')
      .then(res => res.json())
      .then(data => setChapters(data.chapters))
      .catch(err => console.error(`Error : ${err}`))
    // console.log()
  }, [])

  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={`/chapter-${chapters.id}`} element={<ChapterCover />} />
            <Route path={`/chapter-${chapters.id}/content`} element={<ChapterItem />} />
            <Route path={`/chapter-${chapters.id}/content/details`} element={<ChapterDetail />} />
            {/* Route loop chapters cover, item, details */}
            {/* Route Transition */}
            <Route path='/redirect' element={<Redirect />} />
            {/* Route Redirect */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}