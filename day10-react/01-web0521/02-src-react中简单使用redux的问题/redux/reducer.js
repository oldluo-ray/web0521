const initState = {
    count: 100
}
export default function reducer(state= initState, action){
    switch(action.type){
        case 'inc':
            return {
                ...state,
                count: state.count + action.num
            }
        default: 
            return state
    }

}