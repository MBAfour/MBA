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

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

function ChatPage() {
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
      .sendMessage(user.name, msg)
      .then((res) => {
        console.log("sent", res);
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
    <>
      {user !== null ? (
          <Container>
        <Header />
        <Logo />
        <div className="chat-container">
          <SockJsClient
            url={"http://localhost:8080/chat/"} 
            topics={["/topic/group"]}
            onConnect={console.log("connected!")}
            onDisconnect={console.log("disconnected!")}
            onMessage={(msg) => onMessageReceived(msg)}
            debug={false}
            headers= {customHeaders}
          />
          <ChatInput handleOnSubmit={handleMessageSubmit} />
          <Chat messages={messages} currentUser={user} />
        </div>
        </Container>
      ) : (
        <Container>
        <Header />
        <Logo />
        <ChatLogin handleOnSubmit={handleLoginSubmit} />
        </Container>
      )}
    </>
  );
}

export default ChatPage;