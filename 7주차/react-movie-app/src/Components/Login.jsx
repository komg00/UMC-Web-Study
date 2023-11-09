import React, { useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
  };

  const validatePassword = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  }
  
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isAllValid = isEmailValid && isPasswordValid;

  const onEmailHandler = e => {
    const curremail = e.target.value;
    setEmail(curremail);

    if (!validateEmail(curremail)) {
      setEmailMsg('올바른 이메일을 입력해주세요.');
    } else {
      setEmailMsg("");
    }
    console.log(isEmailValid);
  }

  const onPasswordHandler = e => {
    const currpwd = e.target.value;
    setPassword(currpwd);

    if (!validatePassword(currpwd)) {
      setPasswordMsg('영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.');
    } else {
      setPasswordMsg('');
    }
    console.log(isPasswordValid);
  }
 
  return (
    <div className='login-page'>
      <h2 className='login-title'>이메일과 비밀번호를 입력해주세요</h2>
      <form className='login-form' onSubmit={onSubmitHandler}>
        <label>이메일 주소</label>
        <input type='email' className='email' placeholder="이메일 주소" onChange={onEmailHandler}/>
        <p className='login-text'>{emailMsg}</p>
        <label>비밀번호</label>
        <input type='password' className='password' placeholder='영문, 숫자, 특수문자 포함 8자 이상' onChange={onPasswordHandler}/>
        <p className='login-text'>{passwordMsg}</p>
        <button className='login-btn' style={{backgroundColor: isAllValid ? "#032541" : "gray"}}>확인</button>
      </form>      
    </div>
  )
}
