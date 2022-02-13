import styled from "styled-components";
import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import LoginProcess from '../service/transaction/login_process'
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
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

const SigninPage = () => {
  const navigate = useNavigate();
  const [logInInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });

  let settingLogInFunction = {
    studentId: (e) => {
      const studentId = e.target.value;
      return setLoginInfo((state) => ({ ...state, studentId: studentId }));
    },

    password: (e) => {
      const password = e.target.value;
      return setLoginInfo((state) => ({ ...state, password: password }));
    },
  };

  const LoginBtnOnclick = () => {
    LoginProcess(logInInfo);
    setLoginInfo({
      userId: "",
      password: "",
    });
    //handleLoginModal.close();
    navigate("/");
  };

  return (
    <>
      <Container>
        <Header />
        <Logo />
        <Input id="studentId" name="studentId" placeholder="학번" onChange={settingLogInFunction.studentId} value={logInInfo.studentId} />
        <Input id="password" name="password" type="password" placeholder="비밀번호" onChange={settingLogInFunction.password} value={logInInfo.password} />
        <Button onClick={LoginBtnOnclick}>로그인</Button>
      </Container>
    </>
  );
};

export default SigninPage;