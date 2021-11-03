import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

function LoginForm({loginUser, setUserName}) {

    const [failLogin, setFailLogin] = useState(false);
    let login = "";
    let password = "";

    const history = useHistory();

    const handleLoginChange = (e) => {
        login = e.target.value;
    }

    const handlePasswordChange = (e) => {
        password = e.target.value;
    }

    const tryLoginUser = () => {
        let result = loginUser({login: login, password: password});
        if(result)
        {
            setUserName(login);
            history.push("/customDataList");
        }
        else setFailLogin(true);
    }

    return(
        <div className="col-12 mx-auto mt-4">
            <div className="col-4 row mx-auto">
                <p className="h4 col-3 row">Login:</p>
                <div className="col-6 row mx-auto">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={handleLoginChange}
                    />
                 </div>
            </div>
            <div className="col-4 row mx-auto mt-1">
                <p className="h4 col-3 row">Password:</p>
                <div className="col-6 row mx-auto">
                    <input 
                        type="password" 
                        className="form-control-lg"
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            { failLogin &&
              <label className="text-danger">You enter wrong login or password!</label>
            }
            <div className="col-1 row mx-auto mt-2">
                <button className="btn-lg btn-primary" onClick={tryLoginUser}>Login</button>
            </div>
            <div className="col-1 row mx-auto mt-1">
                <Link className="btn-lg btn-primary" to="/register">Register</Link>
            </div>
        </div>
    );
}

export default LoginForm;