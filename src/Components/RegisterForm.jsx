import React, { useState } from 'react';
import { connect } from 'react-redux';
import userRegister from '../store/actionCreators/userRegister';
import { useForm } from 'react-hook-form';

function RegisterForm({ history, users, addUser }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const createUser = () => {
        addUser({
            id: users[users.length - 1].id + 1,
            login: login,
            password: password,
            email: email
        });
        history.push("/login");
    }

    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Create new user</h1>
                    <form onSubmit={handleSubmit(createUser)}>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Login:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                {...register("login", { required: "Login is required", 
                                                        minLength: {value: 3, message: "Login must be at least 3 characters in length"}, 
                                                        maxLength: {value: 50, message: "Login must be 50 characters max"},
                                                        validate: {loginTaken: value => {
                                                            let isNotExist = true
                                                            users.forEach(user => {
                                                                if(value === user.login) isNotExist = false;
                                                            });
                                                            return isNotExist || "User with this username already exists";
                                                        }}})} 
                                onChange={handleLoginChange} 
                            />
                            {errors.login && <small className="text-danger d-flex">{errors.login.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Password:</label>
                            <input 
                                type="password" 
                                className="form-control"
                                {...register("password", { required: "Password is required",
                                                           minLength: {value: 8, message: "Password must be at least 8 characters in length!"},
                                                           validate: { number: value => /\d/.test(value) || "Password must contains at least 1 number",
                                                                       capitalLetter: value => new RegExp('[A-Z]').test(value) || "Password must contains at least 1 capital letter"}})} 
                                onChange={handlePasswordChange}
                            />
                            {errors.password && <small className="text-danger d-flex">{errors.password.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Confirm password:</label>
                            <input 
                                type="password" 
                                className="form-control"
                                {...register("confirmPassword", { required: "Confirm password is required",
                                                                  validate: value => {
                                                                      console.log(value + " password: " + password)
                                                                      return value !== {password} || "Password and confirm password don't match";
                                                                    }})} 
                            />
                            {errors.confirmPassword && <small className="text-danger d-flex">{errors.confirmPassword.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Email:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                {...register("email", { required: "Email is required",
                                                        pattern: {
                                                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                                                            message: "Email has wrong format"},
                                                        validate: {emailTaken: value => {
                                                            let isNotExist = true
                                                            users.forEach(user => {
                                                                if(value === user.email) isNotExist = false;
                                                            });
                                                            return isNotExist || "This email already registered";
                                                        }}})} 
                                onChange={handleEmailChange}
                            />
                            {errors.email && <small className="text-danger d-flex">{errors.email.message}</small>}
                        </div>
                        <button className="btn-lg btn-primary" type="submit">Submit</button>
                    </form>
                </div>
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