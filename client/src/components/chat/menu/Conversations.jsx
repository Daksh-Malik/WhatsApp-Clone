import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../api/api'
import { Box, Divider, styled } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;
`

export default function Conversations({text}) {

    const [users, SetUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase())); // search logic
            SetUsers(filteredData);
        }
        fetchData();
    },[text]); //here dependency is text means whenever there is change in text this useEffect will be called

  return (
    <Component>
        {
            users.map(user => (
                user.sub !== account.sub && //this will prevent the current logged in user to display in chats
                <>
                <Conversation user={user}/>
                <StyledDivider/>
                </>
            ))
        }
    </Component>
  )
}
