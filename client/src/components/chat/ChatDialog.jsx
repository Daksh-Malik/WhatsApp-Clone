import { Dialog, Box, styled} from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import Chatbox from './chat/Chatbox'
import { AccountContext } from '../../context/AccountProvider'

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled('Box')`
    min-width: 450px;
`
const RightComponent = styled('Box')`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`

const style = {
    height: '95%',
    width: '100%',
    margin: '20px',
    borderRadius: '0',
    maxWidth: '100%',
    maxheight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

export default function ChatDialog() {

    const {person} = useContext(AccountContext);

  return (
    <>
    <Dialog open={true} PaperProps={{sx:style}} hideBackdrop={true} maxWidth={'md'}>
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                {Object.keys(person).length ? <Chatbox/> : <EmptyChat/>}
            </RightComponent>
        </Component>
    </Dialog>
    </>
  )
}
