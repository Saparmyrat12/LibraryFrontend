import { USER_LOGIN } from "../actions";

function userLogin(userName){
    return{
        type: USER_LOGIN,
        userName: userName
    }
}

export default userLogin;