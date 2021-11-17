import { USER_LOGIN, USER_REGISTER, UPDATE_USERS } from "../actions";
import initialState from "../initialState";

function userReducer(state = initialState, action){
    switch(action.type){
        case USER_LOGIN: return { ...state, userName: action.userName };
        case USER_REGISTER:{ 
            let updatedUsers = state.users;
            updatedUsers.push(action.user);
            return { ...state, users: updatedUsers };
        }
        case UPDATE_USERS:{
            return {...state, users: action.users};
        }
        default: return state;
    }
}

export default userReducer;