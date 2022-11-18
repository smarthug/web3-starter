import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import MainContainer from './components/MainContainer'

import Home from './pages/home'
import Test from './pages/test'
import File from './pages/file'

export default function Router() {

    return (
        <HashRouter>
            <AppBar />
            <MainContainer>
                <Routes>
                    <Route path={`/test`} element={<Test />} />
                    <Route path={`/File`} element={<File />} />
                    <Route path={`/`} element={<Home />} />
                </Routes>
            </MainContainer>
        </HashRouter>
    )
}

// function Home() {
//     return (
//         <div>
//             hello home
//         </div>
//     )
// }