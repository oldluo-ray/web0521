import { INC } from './constants'
const initState = {
  count: 0,
}
export default function countReducer(state = initState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
