import React from 'react';
import s from './FormsControls.module.css';
import {Field} from "redux-form";
import {requiredField} from "../../utils/validators/validators";

export const FormCreator = ({input, meta:{touched,error},children}) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {hasError ? <span>{error}</span> : ''}
      <div>
        {children}
      </div>
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return (
    <FormCreator {...props}> <textarea {...input} {...restProps}/> </FormCreator>
  )
};

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return (
    <FormCreator {...props}> <input {...input} {...restProps}/> </FormCreator>
  )
};

export const createField = (placeholder, name, validators, component,props={},text='') => (
  <div>
    <Field name={name} component={component}
           validate={validators} placeholder={placeholder} {...props}/>{text}
  </div>)
;
