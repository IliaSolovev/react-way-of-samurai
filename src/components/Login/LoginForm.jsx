import {Field, reduxForm} from "redux-form";
import React from "react";
import {createField, Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../utils/validators/validators";
import s from './Login.module.css'

const LoginForm = ({handleSubmit,error}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField('email','email',[requiredField],Input)}
        {createField('Password','password',[requiredField],Input,{type:'password'})}
        {createField(null,'rememberMe',[],Input,{type:'checkbox',text:'Remember me'})}
      { error && <div className={s.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>

    </form>)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;