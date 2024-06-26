import { AttachFile, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../../api/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: rgba(84,101,111,1)
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg)
`;

export default function Footer({sendText, setValue, value, file, setFile}) {

    useEffect(()=>{
        const getImage = async () => {
            if(file){
                const data = new FormData(); //as we need to send file in chunks
                data.append("name", file.name);
                data.append("file", file);

                // await uploadFile(data);
            }
        }
        getImage();
    },[file]);
    
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

  return (
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor="fileInput">
            <ClipIcon/>
        </label>
        <input 
            type='file' 
            id='fileInput' 
            style={{display: 'none'}}
            onChange={(e)=>onFileChange(e)}
        />
        <Search>
            <InputField 
                placeholder='Type a message' 
                onChange={(e) => setValue(e.target.value)} 
                onKeyPress={(e)=>sendText(e)}
                value={value}
            />
        </Search>
        <Mic/>
    </Container>
  )
}
