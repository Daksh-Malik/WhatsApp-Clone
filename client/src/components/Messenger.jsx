import React from 'react'
import LoginDialogue from './account/LoginDialogue'
import { AppBar, Toolbar, styled, Box } from '@mui/material'

const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`
const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`

export default function Messenger() {
    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <LoginDialogue/>
        </Component>
    )
}
