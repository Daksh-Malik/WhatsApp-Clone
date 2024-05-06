import React, { useContext, useState } from 'react'
import {AccountContext} from "../../../context/AccountProvider"
import { Box, styled } from '@mui/material'
import { Chat as MessageIcon} from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import InfoDrawer from '../../drawer/InfoDrawer'

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Wrapper = styled(Box)`
    & > * {
      margin-left: 2px;
      padding: 8px;
      color: #000;
    }
    & : first-child {
      font-size: 22px;
      margin-right: 8px;
    }
`

const Image = styled('img')({
  height: 44,
  width: 44,
  borderRadius: "50%"
})

export default function Header() {

  const {account} = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = ()=>{
    setOpenDrawer(true);
  }

  return (
    <>
      <Component>
          <Image src={account.picture} alt="DP" onClick={()=>toggleDrawer()}/>
          <Wrapper>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
          </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
