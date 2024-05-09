import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { defaultProfilePicture } from '../../../assets/assets';
import { AccountContext } from '../../../context/AccountProvider';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const IconStyle1 = styled(Search)`
  color: rgba(84,101,111,1)
`
const IconStyle2 = styled(MoreVert)`
  color: rgba(84,101,111,1)
`


export default function ChatHeader({person}) {

    const {activeUsers} = useContext(AccountContext);

  return (
    <Header>
            {
            person.picture ? 
            <Image src={person.picture} alt="DP"/>
            :
            <Image src={defaultProfilePicture} alt="DP"/>
            }
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
        </Box>
        <RightContainer>
            <IconStyle1/>
            <IconStyle2/>
        </RightContainer>
    </Header>
  )
}
