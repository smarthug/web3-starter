
import { Link } from 'react-router-dom';
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Toolbar from '@mui/material/Toolbar';
import { Divider } from '@mui/material';


export default function SideNav() {

    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Toolbar />
            <Divider />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab label='Wallet' to='/' component={Link} />
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
            </Tabs>
        </>

    );
}


{/* <Tabs
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ borderRight: 1, borderColor: "divider" }}
>
  <Tab label='Wallet' to='/' component={Link} />
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
  <Tab label="Item Four" />
  <Tab label="Item Five" />
  <Tab label="Item Six" />
  <Tab label="Item Seven" />
</Tabs> */}