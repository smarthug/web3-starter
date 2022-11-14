import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#fcd535"
        },
        secondary: {
            main: "#474d57"
        },
        background: {
            paper: "#0b0e11",
            default: "#181a20"
        },

    },
});

export default darkTheme;
// 메인
//#fcd535

//배경
//#181a20

// 페이퍼
//#0b0e11