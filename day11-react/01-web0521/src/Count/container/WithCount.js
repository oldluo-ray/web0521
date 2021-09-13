import { connect } from 'react-redux'
import Count from '../components/Count'
import { increment } from '../redux/actions'
export default connect((state) => ({ count: state.y.count }), { increment })(
  Count
)
