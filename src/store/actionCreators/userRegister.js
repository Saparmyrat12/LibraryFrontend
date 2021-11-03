import { USER_REGISTER } from "../actions";


function userRegister(user){
    return{
        type: USER_REGISTER,
        user: user
    }
}

export default userRegister;