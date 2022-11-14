import { Button, Paper } from '@mui/material'
import React from 'react'

export default function Home() {
    
    return (
        <div>
            <Paper sx={{width:"100%", height:128}} variant="elevation" elevation={0}  >

                <Button color='primary' variant='contained'>Test</Button>
                <Button color='secondary' variant='contained'>Test</Button>
            </Paper>
        </div>
    )
}