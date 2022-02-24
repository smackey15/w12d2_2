// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

// const sessionReducer = (state = {id: null}, action) => {
//     debugger
//     Object.freeze(state)
//     let nextState = Object.assign({}, state)

//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             nextState[id] = action.currentUser.id
//             return nextState

//         case LOGOUT_CURRENT_USER:
//             return nextState
    
//         default:
//             return state;
//     }
// }

// export default sessionReducer;

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
  } from '../actions/session_actions';
  
  const _nullUser = Object.freeze({
    id: null
  });
  
  const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  