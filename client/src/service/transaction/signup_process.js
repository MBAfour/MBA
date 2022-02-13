import post_signup from "../api/post/post_signup";
//import LoginProcess from "./login_process";

const SignupProcess = (signUpInfo) =>{

    console.log(signUpInfo)
    /*
    const LoginInfo = {
        "userId" : signUpInfo.userId,
        "password" : signUpInfo.password,
    }*/

    post_signup(JSON.stringify(signUpInfo))
    .then((res)=>{
        console.log(res)
        console.log("회원가입 성공")
        //console.log("ㄹ그인 start,,,")
        //LoginProcess(LoginInfo)
    })
    .catch(err => console.log(err))
}


export default SignupProcess