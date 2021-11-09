import React from 'react';
import { connect } from 'react-redux';
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
import RegisterForm from './Components/RegisterForm';
import userLogin from './store/actionCreators/userLogin';

function App({ history, userName, loginUser, users }) {

  const tryLoginUser = (user) => {
    let userExists = false;
    console.log(users);
    users.forEach(existingUser => {
      if(existingUser.login.localeCompare(user.login) === 0 && existingUser.password.localeCompare(user.password) === 0) userExists = true;
    });
    return userExists;
  }

  return (
    <div className="App">
      {
        userName === "" && history.location.pathname !== "/login" && history.location.pathname !== "/register" &&
        <Redirect to="/login" />
      }
        { history.location.pathname !== "/login" && history.location.pathname !== "/register" &&
          <nav className="col-10 row navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/customDataList"><h5>Custom Data list</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dataListFromSource"><h5>Data List from source</h5></Link>
                </li>
              </ul>
              <span className="navbar-text"><h5>Hello {userName}!</h5></span>
            </div>
          </nav>
        }
          <Switch>
            <Route path='/login' >
              <LoginForm loginUser={tryLoginUser} setUserName={(userName) => loginUser(userName)}/>
            </Route>
            <Route path='/customDataList' component={CustomDataList} />
            <Route path='/dataListFromSource' component={DataListFromSource} />
            <Route path='/register' component={RegisterForm} />
            <Redirect form='/' to='/login' />
          </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    userName: state.userName,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loginUser: (userName) => dispatch(userLogin(userName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withRouter(App));
