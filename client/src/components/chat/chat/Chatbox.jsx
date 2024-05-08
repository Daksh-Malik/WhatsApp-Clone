import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../api/api'

export default function Chatbox() {

    const {person, account} = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(()=>{
        const getConversationDetails = async () => {
          let data = await getConversation({senderId: account.sub, receiverId: person.sub});
          setConversation(data);
        }
        getConversationDetails();
    },[person.sub]);

  return (
    <Box style={{height: '75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}
