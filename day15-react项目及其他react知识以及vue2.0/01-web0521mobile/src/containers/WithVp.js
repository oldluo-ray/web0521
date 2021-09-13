import {connect} from 'react-redux'
import VerifyPhone from '../pages/Register/VerifyPhone'
import {savePhone} from '../redux/actions'
export default connect(null, {savePhone})(VerifyPhone)