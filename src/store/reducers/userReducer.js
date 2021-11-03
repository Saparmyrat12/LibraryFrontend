import { USER_LOGIN, USER_REGISTER } from "../actions";
import initialState from "../initialState";

function userReducer(state = initialState, action){
    switch(action.type){
        case USER_LOGIN: return { ...state, userName: action.userName };
        case USER_REGISTER:{ 
            let newUsers = state.users;
            newUsers.push(action.user);
            return { ...state, users: newUsers };
        }
        default: return state;
    }
}

export default userReducer;