import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './Components/Layout/Layout'
import { ChapterCover } from './Pages/ChapterCover/ChapterCover'
import { ChapterDetail } from './Pages/ChapterDetail/ChapterDetail'
import { ChapterItem } from './Pages/ChapterItem/ChapterItem'
import { Home } from './Pages/Home'
import { Redirect } from './Pages/Redirect/Redirect'

import './App.css'
import { Error404 } from './Pages/Error404/Error404'
import { LegalMentions } from './Pages/LegalMentions/LegalMentions'
import { AppProvider } from './Components/Provider/Provider'
import { Chapter } from './Pages/Chapter/Chapter'


export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'/chapter/:id'} element={<Chapter />} />  
            {/* <Route path={'/chapter/:id/content'} element={<ChapterItem />} /> */}
            {/* <Route path={'/chapter/:id/detail'} element={<ChapterDetail />} /> be a modal bitch */}
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/mentions-legales' element={<LegalMentions />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}