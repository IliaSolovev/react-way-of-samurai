import React from 'react';
import s from './FormsControls.module.css';

export const FormCreator = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {hasError ? <span>{meta.error}</span> : ''}
      <div>
        {props.children}
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
