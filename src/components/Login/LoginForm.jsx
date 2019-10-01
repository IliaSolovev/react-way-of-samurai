import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../utils/validators/validators";
import s from './Login.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field name={'email'} component={Input}
               validate={[requiredField]} placeholder={'Login'}/>
      </div>
      <div>
        <Field name={'password'} component={Input}
               validate={[requiredField]} placeholder={'Password'}
               type={'password'}/>
      </div>
      <div>
        <Field name={'rememberMe'} type={'checkbox'} component={'input'} placeholder={''}/> Remember me
      </div>
      { props.error && <div className={s.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>

    </form>)
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;