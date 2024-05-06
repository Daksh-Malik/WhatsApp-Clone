import React, { useState } from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`

export default function HeaderMenu({setOpenDrawer}) {

    const [open,Setopen] = useState(null);

    const handleClose = ()=>{
        Setopen(null);
    }

    const handleClick = (e)=>{
        Setopen(e.currentTarget);
    }

    return (
        <>  
            <MoreVert onClick={handleClick}/> {/*this icon is acting as anchor here*/}
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}
