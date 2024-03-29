import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    
        default:
            return state;
    }
}

export default usersReducer;