import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import LoginDialogue from './account/LoginDialogue'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import ChatDialog from './chat/ChatDialog'

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`
const ChatHeader = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;
`
const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`

export default function Messenger() {
    const {account} = useContext(AccountContext);
    return (
        <Component>
            {account ? 
                <>
                <ChatHeader>
                    <Toolbar>

                    </Toolbar>
                </ChatHeader>
                <ChatDialog/>
                </>
                :
                <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialogue/>
                </>
            } 
        </Component>
    )
}
