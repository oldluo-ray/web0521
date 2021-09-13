import { connect } from 'react-redux'
import List from '../components/List'
import { saveListCreatorAsync } from '../redux/actions'

export default connect(
  (state) => {
    return { list: state.x.list }
  },
  {
    saveListCreatorAsync,
  }
)(List)
// saveListCreatorAsync = (dispatch) => {
//     dispatch(saveListCreatorAsync())
// }
