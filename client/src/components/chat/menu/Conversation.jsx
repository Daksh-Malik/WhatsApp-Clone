import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { emptyProfilePicture } from '../../../assets/assets';

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
  return (
    <>
    <Component>
        <Box>
        {
            user.picture ? 
            <Image src={user.picture} alt="DP" />
            :
            <Image src={emptyProfilePicture} alt="DP" />
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
