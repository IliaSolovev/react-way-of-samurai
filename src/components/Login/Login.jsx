import React from 'react';
import LoginReduxForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props)=>{
  const onSubmit = (value)=>{
    props.login(value.email,value.password,value.rememberMe);
  };
  if(props.isAuth) return <Redirect to={'/profile'}/>;
  return (<div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>)
};

export default  Login;