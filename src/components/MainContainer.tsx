import React from 'react'
import { Box } from '@mui/material'

interface Props {
    children: React.ReactElement
}

export default function Home({ children }: Props) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, marginTop: 8, width: { sm: `calc(100% - ${240}px)` } }}
        >
            {children}
        </Box>

    )
}