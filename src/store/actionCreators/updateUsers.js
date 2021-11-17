import { UPDATE_USERS } from "../actions";

function updateUsers(users){
    return{
        type: UPDATE_USERS,
        users: users
    }
}

export default updateUsers;