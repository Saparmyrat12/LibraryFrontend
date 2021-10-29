import React, {useState} from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";

import './App.css';
import CustomDataList from './Components/CustomDataList';
import DataListFromSource from './Components/DataListFromSource';
import LoginForm from './Components/LoginForm';

function App({ history }) {

  const [userName, setUserName] = useState("");

  const users = [
    {
      id: 1,
      login: "admin",
      password: "admin"
    },
    {
      id: 2,
      login: "manager",
      password: "manager"
    },
    {
      id: 1,
      login: "user",
      password: "user"
    }
  ];

  const loginUser = (user) => {
    let userExists = false;
    users.forEach(existingUser => {
      if(existingUser.login.localeCompare(user.login) === 0 && existingUser.password.localeCompare(user.password) === 0) userExists = true;
    });
    return userExists;
  }

  return (
    <div className="App">
        { history.location.pathname !== "/login" &&
          <nav className="col-10 row navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/customDataList">Custom Data list</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dataListFromSource">Data List from source</Link>
                </li>
              </ul>
              <span className="navbar-text">Hello {userName}!</span>
            </div>
          </nav>
        }
          <Switch>
            <Route path='/login' >
              <LoginForm loginUser={loginUser} setUserName={setUserName}/>
            </Route>
            <Route path='/customDataList' component={CustomDataList} />
            <Route path='/dataListFromSource' component={DataListFromSource} />
            <Redirect form='/' to='/login' />
          </Switch>
    </div>
  );
}

export default withRouter(App);
