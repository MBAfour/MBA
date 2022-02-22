import React, { useState } from "react";
import styled from "styled-components";

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

function ChatLogin({ handleOnSubmit }) {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    handleOnSubmit(name);
  };
  
  return (
    
    <div>
      <div className="chat-header">
      채팅
      </div> 
      <form onSubmit={handleSubmit} className="chat-input">
        <Input
          placeholder="Presser Enter after input your nickname"
          value={name}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default ChatLogin;