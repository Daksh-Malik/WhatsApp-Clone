import React from 'react'
import { Box, Drawer, Typography, styled } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const Header = styled(Box)`
    background-color: #008069;
    height: 94px;
    color: #FFFFFF;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
    & > p {
        font-size: large;
    }
`
const Component = styled(Box)`
    background-color: #efefef;
    height: 87%;
`

const style = {
    left: 20,
    top: 31,
    height: '91.5%',
    width: '29.5%',
    boxShadow: 'none'
}

export default function InfoDrawer({open, setOpen}) {

    const handleClose = ()=>{
        setOpen(false);
    }

  return (
    <Drawer 
        open={open}
        onClose={handleClose}
        PaperProps={{sx:style}}
        style={{zIndex:1500}}
    >
        <Header>
            <ArrowBack onClick={()=>handleClose()}/>
            <Typography>Profile</Typography>
        </Header>
        <Component>
            <Profile/>
        </Component>
    </Drawer>
  )
}
