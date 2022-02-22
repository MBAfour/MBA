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
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="사용할 닉네임을 입력하세요."
          value={name}
          onChange={handleOnChange}
        />
        <button type="submit">입장</button>
      </form>
    </div>
  );
}

export default ChatLogin;