import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { defaultProfilePicture } from '../../../assets/assets';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../api/api';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

export default function Conversation({user}) {

    const {setPerson, account} = useContext(AccountContext);

    const getUser = async ()=> {
        setPerson(user);
        await setConversation({senderID: account.sub, receiverID: user.sub});
    }

  return (
    <>
    <Component onClick={()=>getUser()}>
        <Box>
        {
            user.picture ? 
            <Image src={user.picture} alt="DP" />
            :
            <Image src={defaultProfilePicture} alt="DP" />
            }
        </Box>
        <Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Box>
    </Component>
    </>
  )
}
