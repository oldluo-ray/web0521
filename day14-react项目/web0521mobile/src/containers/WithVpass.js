import {connect} from 'react-redux'
import VerifyPassword from '../pages/Register/VerifyPassword'
export default connect(state=>({phone: state.phone}))(VerifyPassword)