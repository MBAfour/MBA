import React, { useState } from "react";
import SockJsClient from "react-stomp";
import chatApi from "../service/chatapi";
import styled from "styled-components";
import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'

import "./styles.css";

import Chat from "./Chat";
import ChatInput from "./ChatInput";
import ChatLogin from "./ChatLogin";
import { useParams } from "react-router-dom";

const Container = styled.div`
  
`;

const ChatInputText = styled.div`
  position:fixed;
  bottom: 0;
  width: 100%;
  

  `;

function ChatPage() {
  const {bookId} = useParams();
  console.log("bookId : " , bookId);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const onMessageReceived = (msg) => {
    console.log("New Message Received!!", msg);
    setMessages(messages.concat(msg));
  };

  const handleLoginSubmit = (name) => {
    setUser({ name: name, color: randomColor() });
  };

  const handleMessageSubmit = (msg) => {
    chatApi
      .sendMessage(user.name, msg, bookId)
      .then((res) => {
        console.log("send", res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  };

  const customHeaders = {
    "Authorization": "Bearer " + localStorage.getItem("mba-token")
};

  return (
    <div>
      {user !== null ? (
          <Container>
        <Header />
        <Logo />
        <div className="chat-container">
          <SockJsClient
            url={"http://localhost:8080/chat/"} 
            topics={["/subscribe/book/" + bookId]} // 
            onConnect={console.log("connected!")}
            onDisconnect={console.log("disconnected!")}
            onMessage={(msg) => onMessageReceived(msg)}
            debug={false}
            headers= {customHeaders}
          />
          <Chat messages={messages} currentUser={user} />
          <ChatInputText>
          <ChatInput handleOnSubmit={handleMessageSubmit} />
          </ChatInputText>
        </div>
        </Container>
      ) : (
        <Container>
        <Header />
        <Logo />
        <ChatLogin handleOnSubmit={handleLoginSubmit} />
        </Container>
      )}
    </div>
  );
}

export default ChatPage;