import store from "../../store/store"
import ACTION from "../../store/actions/action"


const LogoutProcess = () => {
     localStorage.removeItem("mba-token")
    console.log("로그아웃 성공")
    store.dispatch(ACTION.LOGOUT_ACTION_FUNC())
    store.dispatch(ACTION.DELETE_USER__ACTION_FUNC())
    window.location.reload();
    }




export default LogoutProcess;