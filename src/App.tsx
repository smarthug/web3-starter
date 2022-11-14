import React from 'react'
import Router from './router'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';






export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    )
}



