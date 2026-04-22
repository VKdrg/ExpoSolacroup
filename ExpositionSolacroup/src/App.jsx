import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './Components/Layout/Layout'
import { ChapterCover } from './Pages/ChapterCover/ChapterCover'
import { ChapterDetail } from './Pages/ChapterDetail/ChapterDetail'
import { ChapterItem } from './Pages/ChapterItem/ChapterItem'
import { Home } from './Pages/Home'
import { Redirect } from './Pages/Redirect/Redirect'

import './App.css'
import { LegalMentions } from './Pages/LegalMentions/LegalMentions'


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
            {/* Routes cover, item, details not working */}
            {/* Route Transition (?) */}
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/mentions-legales' element={<LegalMentions />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}