import { Box, styled } from '@mui/material';
import React from 'react'
import Footer from './Footer';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 75.5vh;
    overflow-y: scroll;
`;

export default function Messages() {
  return (
    <Wrapper>
        <Component>

        </Component>
        <Footer/>
    </Wrapper>
  )
}
