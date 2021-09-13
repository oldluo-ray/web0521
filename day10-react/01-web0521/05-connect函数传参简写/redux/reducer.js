import { INC, DEC } from "./constants"
const initState = {
    count: 100
}
export default function reducer(state= initState, action){
    switch(action.type){
        case INC:
            return {
                ...state,
                count: state.count + action.num
            }
        case DEC:
            return {
                ...state,
                count: state.count - action.num
            }
        default: 
            return state
    }

}