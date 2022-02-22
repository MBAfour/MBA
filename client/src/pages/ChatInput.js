import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
  margin-left: 420px;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: rgb(78, 78, 78);
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

function ChatInput({ handleOnSubmit }) {
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleOnSubmit(msg);
    setMsg("");
  };

  return (
    <Container className="chat-bottom">
      <form onSubmit={handleSubmit} id="chatForm">
        <Input
          placeholder="Press Enter for send message"
          value={msg}
          onChange={handleOnChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {           
              handleSubmit(e);
            }
          }}
        />
      </form>
    </Container>
  );
}

export default ChatInput;