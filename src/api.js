/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const endpoint = "https://api.jsonbin.io/b/6194b4eb0ddbee6f8b0cd60d";

const addUser = async (newUser) => {
    let { data } = await axios.get(endpoint + "/latest", { headers: {
                                                'Access-Control-Allow-Origin': '*',
                                                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                                                'secret-key': '$2b$10$FsfZGXZyUWjlvlyYdzXmTerf/gp.0FQiguO62AcsQqNuRvytsB1DO'}});
    data.push(newUser);
    return await axios.put(endpoint, data, { headers: { 'secret-key': '$2b$10$FsfZGXZyUWjlvlyYdzXmTerf/gp.0FQiguO62AcsQqNuRvytsB1DO' }});
};

const getAllUsers = async () => {
    return await axios.get(endpoint + "/latest", { headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                                        'secret-key': '$2b$10$FsfZGXZyUWjlvlyYdzXmTerf/gp.0FQiguO62AcsQqNuRvytsB1DO'}});
}

export default {
    addUser,
    getAllUsers
};