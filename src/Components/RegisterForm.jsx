import React, { useState } from 'react';
import { connect } from 'react-redux';
import userRegister from '../store/actionCreators/userRegister';

function RegisterForm({ history, users, addUser }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorList, setErrorList] = useState([]);

    const handleLoginChange = (e) =>{
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) =>{
        setConfirmPassword(e.target.value);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const createUser = () =>{
        let newErrorList = [];
        if(login === "") newErrorList.push("Please input login!");
        else if(login.length < 3) newErrorList.push("Login must be at least 3 characters in length!");
        else if(login.length > 50) newErrorList.push("Login must be 50 characters max!");
        users.forEach(user =>{
            if(login === user.login) newErrorList.push("User with this username already exists!");
            if(email === user.email) newErrorList.push("This email already registered!");
        });
        if(password === "") newErrorList.push("Please input password!");
        else if(password.length < 8) newErrorList.push("Password must be at least 8 characters in length!");
        else if(!/\d/.test(password)) newErrorList.push("Password must contains at least 1 number");
        else if(!/[A-Z]/.test(password)) newErrorList.push("Password must contains at least 1 capital letter!");
        else if(password !== confirmPassword) newErrorList.push("Password and confirm password don't match!");
        if(email === "") newErrorList.push("Please enter email!");
        else if(!email.includes("@") || !email.includes(".")) newErrorList.push("You email has wrong format!");
        console.log(newErrorList);
        setErrorList(newErrorList);

        if(newErrorList.length === 0){
            addUser({
                id: users[users.length - 1].id + 1,
                login: login,
                password: password,
                email: email
            });
            console.log(users);
            history.push("/login");
        }
    }

    return (
        <div className="register">
            <h3>Create a new user:</h3>
            <div>{console.log(errorList.length)}</div>
            {errorList.length > 0 &&
                <ul className="col-4 row mx-auto">
                    {
                        errorList.map(function(error){
                            return <li className="h5 col-7 text-danger">{error}</li>
                        })
                    }
                </ul>
            }
            <div className="col-4 row mx-auto mt-4">
                <p className="h4 col-5 row">Login:</p>
                <div className="col-7 row">
                    <input
                        type="text"
                        className="form-control-lg"
                        onChange={handleLoginChange}
                    />
                </div>
            </div>
            <div className="col-4 row mx-auto mt-1">
                <p className="h4 col-5 row">Password:</p>
                <div className="col-7 row">
                    <input
                        type="password"
                        className="form-control-lg"
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            <div className="col-4 row mx-auto mt-1">
                <p className="h4 col-5 row">Confirm password:</p>
                <div className="col-7 row">
                    <input
                        type="password"
                        className="form-control-lg"
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
            </div>
            <div className="col-4 row mx-auto mt-1">
                <p className="h4 col-5 row">Email:</p>
                <div className="col-7 row">
                    <input
                        type="text"
                        className="form-control-lg"
                        onChange={handleEmailChange}
                    />
                </div>
            </div>
            <div className="col-1 row mx-auto mt-2">
                <button className="btn-lg btn-primary" onClick={createUser}>Register</button>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addUser: (user) => dispatch(userRegister(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);