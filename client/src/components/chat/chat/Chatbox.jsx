import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'

export default function Chatbox() {

    const {person} = useContext(AccountContext);

  return (
    <Box style={{height: '75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person}/>
    </Box>
  )
}