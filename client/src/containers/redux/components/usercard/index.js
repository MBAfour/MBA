import { connect } from "react-redux"
import usercard from "../../../../components/common/usercard"


const mapStateToProps = (state) => {
    return {
        name: state.user_reducer.name,
        studentId: state.user_reducer.userId,
    }
}

export default connect(mapStateToProps, null)(usercard)