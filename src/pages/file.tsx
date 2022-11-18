import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'

// interface window {
//     electron: {
//         startDrag: () => void;
//     };
// }

// declare global {
//     interface Window {
//         electron: {
//             startDrag: (fileName:string) => void;
//         };
//     }
// }

declare global {
    interface Window {
        electron: any;
    }
}

export default function Home() {

    function handleDrag(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event)
        window.electron.startDrag('drag-and-drop-1.md')
    }

    function handleDrag2(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event)
        window.electron.startDrag('drag-and-drop-2.md')
    }

    function handleDrag3(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event)
        window.electron.startDrag('userInfo.json')
    }

    return (
        <>

            <div
                style={{ "width": "100px", "height": "100px", "backgroundColor": "red" }}
                draggable={true} onDragStart={handleDrag} >

                files1
            </div >
            <div
                style={{ "width": "100px", "height": "100px", "backgroundColor": "red" }}
                draggable={true} onDragStart={handleDrag2} >

                files2
            </div >
            <div
                style={{ "width": "100px", "height": "100px", "backgroundColor": "red" }}
                draggable={true} onDragStart={handleDrag3} >

                files3
            </div >
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
            <img src="/assets/aa.png" />
        </>

    )
}