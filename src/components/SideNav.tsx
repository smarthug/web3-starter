
import { Link } from 'react-router-dom';
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Toolbar from '@mui/material/Toolbar';
import { Divider } from '@mui/material';


export default function SideNav({value, handleChange}) {

    // const [value, setValue] = React.useState(0);

    // const handleChange = (_, newValue) => {
    //     setValue(newValue);
    // };

    // really stupid bug
    // https://github.com/mui/material-ui/issues/32749
    // useEffect(() => {
    //     // setTimeout(()=>{
    //     //     setValue(1)

    //     // },4000)
    //     setValue(value)
    // }, [value])


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
                <Tab label='Wallet' to='/' component={Link} value={0} />
                <Tab label='Make Contract' to='/EtherContract' component={Link} value={1} />
                <Tab label='Manage Contract' to='/EtherManage' component={Link} value={2} />
                <Tab label='Upload File to AWS S3' to='/UploadFile' component={Link} value={3} />
                <Tab label='NFT Preview' to='/Preview' component={Link} value={4} />
                <Tab label='Manage NFTs' to='/ManageNFT' component={Link} value={5} />
                <Tab label='Snapshot' to='/Scope' component={Link} value={6} />
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