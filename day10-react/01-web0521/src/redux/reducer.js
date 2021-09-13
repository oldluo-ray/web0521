import {SAVE_LIST} from './constants'

const initState = {
    list: []
}
export default function reducer(state=initState, action){
    switch(action.type){
        case SAVE_LIST:
            return {
                ...state, 
                list: action.list
            }

        default: 
            return state

    }
}