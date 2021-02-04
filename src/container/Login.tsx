import React, { useState } from 'react';
import FormContainer from './Form/FormContainer';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const inputs = ['username', 'password'];

  const handleSubmot = ():void => {
    // API call;
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>, i: number):void => {
    switch(i) {
      case 0: {
      	setUsername(e.target.value);
      	break;
      }
      case 1: {
      	setPassword(e.target.value);
      	break;
      } 
      default: {}
    }
  } 

  return(
  <div>
    <h1>Welcome</h1>
    <div></div>
    <p>Don't you have an account? <span><a href='/'>Create account</a></span></p>
   </div>);
}