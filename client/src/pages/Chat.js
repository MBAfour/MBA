import React from "react";
import styled from "styled-components";

const ChatBox = styled.div`
  
`;



const Sender = styled.div`
  margin: 10px 20px 0 20px; 
  font-weight: bold;
`;

const Message = styled.div`
  display: inline-block; 
  word-break:break-all; 
  margin: 5px 20px; 
  max-width: 75%; 
  border: 1px solid #888; 
  padding: 10px; 
  border-radius: 5px; 
  background-color: #FCFCFC; 
  color: #555; 
  text-align: left;
`;

function Chat({ messages, currentUser }) {

  const formattingTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hour}:${min}`;
  };

  return (
    <ChatBox className="chat-middle">

    <div className="chat-header">
      채팅방
    </div> 
      <ul>
      {messages.map((msg) => (
        <li 
          className={`chat-bubble ${
            msg.author === currentUser.name ? "send" : "receive"
          }`}
        >
          <Sender>
          <span>{msg.author} </span>
          </Sender>
          <Message>
          <span>{msg.content}</span>
          </Message>
        </li>
      ))}
      </ul>
    </ChatBox>
  );
}

export default Chat;