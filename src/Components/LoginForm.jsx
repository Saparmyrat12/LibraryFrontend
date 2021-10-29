import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

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
        <div className="col-12 row mx-auto">
            <div className="col-12 row mx-auto">
                <p className="h4">Login</p>
                <div className="col-3 row mx-auto">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={handleLoginChange}
                    />
                 </div>
            </div>
            <div className="col-12 row mx-auto">
                <p className="h4">Password</p>
                <div className="col-3 row mx-auto">
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
            <button className="col-1 row btn-lg btn-primary mx-auto" onClick={tryLoginUser}>Login</button>
        </div>
    );
}

export default LoginForm;