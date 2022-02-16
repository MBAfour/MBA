import { connect } from "react-redux"
import Header from "../../../../component/Header/Header"


const mapStateToProps = (state, props) => {
    return {
        logined: state.login_reducer.logined,
    }
}

export default connect(mapStateToProps, null)(Header)