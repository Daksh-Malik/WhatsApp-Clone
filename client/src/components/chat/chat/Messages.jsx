import { Box, styled } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../api/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 75.5vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 40px;
`

export default function Messages({ person, conversation }) {

  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const messageBodyRef = useRef(null);

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  },[])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  },[person._id, conversation._id, newMessageFlag]);

  useEffect(() => {
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight - messageBodyRef.current.clientHeight;
    }
  },[messages])

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  },[incomingMessage, conversation])

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }

      socket.current.emit('sendMessage', message); //real time sending message through socket

      await newMessage(message);

      setValue(''); //after sending the message value returns to empty
      setNewMessageFlag(prev => !prev); //used for toggling values
    }
  }

  return (
    <Wrapper>
      <Component ref={messageBodyRef}>
        {
          messages && messages.map((message, index) => (
            <Container key={index}>
              <Message message={message} />
            </Container>
          ))
        }
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />
    </Wrapper>
  )
}
