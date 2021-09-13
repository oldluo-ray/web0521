import {connect} from 'react-redux'
import VerifyCode from '../pages/Register/VerifyCode'
export default connect(state=>({phone: state.phone}))(VerifyCode)