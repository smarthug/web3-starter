import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/AppBar'

import Home from './pages/home'

export default function Router() {

    return (
        <HashRouter>
            <AppBar />
            <Routes>
                <Route path={`/`} element={<Home />} />
            </Routes>
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