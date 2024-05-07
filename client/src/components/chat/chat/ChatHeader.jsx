import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { defaultProfilePicture } from '../../../assets/assets';

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
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;


export default function ChatHeader({person}) {
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
            <Status>Offline</Status>
        </Box>
        <RightContainer>
            <Search/>
            <MoreVert/>
        </RightContainer>
    </Header>
  )
}
