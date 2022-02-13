import styled from "styled-components";
import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import SignupProcess from '../service/transaction/signup_process'
import { useState } from "react";

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

const SignupPage = ({  }) => {

    //SECTION 회원가입 정보
    const [signUpInfo, setSignUpInfo] = useState({
      email: "",
      password: "",
      name: "",
      studentId: "",
      phone: "",
    });

    let settingSingUpFunction = {
      email: (e) => {
        const email = e.target.value;
        return setSignUpInfo((state) => ({ ...state, email: email }));
      },
      password: (e) => {
        const password = e.target.value;
        return setSignUpInfo((state) => ({ ...state, password: password }));
      },
      name: (e) => {
        const name = e.target.value;
        return setSignUpInfo((state) => ({ ...state, name: name }));
      },
      studentId: (e) => {
        const studentId = e.target.value;
        return setSignUpInfo((state) => ({ ...state, studentId: studentId }));
      },
      phone: (e) => {
        const phone = e.target.value;
        return setSignUpInfo((state) => ({ ...state, phone: phone }));
      },
    };

    const SignupBtnOnclick = () => {
      SignupProcess(signUpInfo);
      //handleLoginModal.close();
      setSignUpInfo({
        email: "",
        password: "",
        name: "",
        studentId: "",
        phone: "",
      });
    };

  return (
    <>
      <Container>
        <Header />
        <Logo />
        <Input id="studentId" name="studentId" placeholder="학번" onChange={settingSingUpFunction.studentId} value={signUpInfo.studentId} />
        <Input id="password" name="password" type="password" placeholder="비밀번호" onChange={settingSingUpFunction.password} value={signUpInfo.password} />
        <Input id="name" name="name" placeholder="이름" onChange={settingSingUpFunction.name} value={signUpInfo.name}/>
        <Input id="email" name="email" type="email" placeholder="이메일" onChange={settingSingUpFunction.email} value={signUpInfo.email}/>
        <Input id="phone" name="phone" placeholder="전화번호" onChange={settingSingUpFunction.phone} value={signUpInfo.phone}/>
        <Button onClick={SignupBtnOnclick}>회원가입</Button>
      </Container>
    </>
  );
};

export default SignupPage;