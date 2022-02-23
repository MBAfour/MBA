
const LogoutProcess = () => {
     localStorage.removeItem("mba-token")
    console.log("로그아웃 성공")
    window.location.reload();
    }




export default LogoutProcess;