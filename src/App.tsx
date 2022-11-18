import React from 'react'
import Router from './router'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';
import { Box } from '@mui/material';






export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Router />
            </Box>
        </ThemeProvider>
    )
}



