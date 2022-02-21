import React from "react";
import styled from "styled-components";

const ChatBox = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  
  color: #000;
  border: none;
  border-radius: 0;
  background-color: rgb(225, 213, 195);
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
      {messages.map((msg) => (
        <li
          className={`chat-bubble ${
            msg.author === currentUser.name ? "send" : "receive"
          }`}
        >
          <span>{msg.author} : {msg.content} </span>

        </li>
      ))}
    </ChatBox>
  );
}

export default Chat;