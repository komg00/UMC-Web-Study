import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function LoginControl() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedin(!!token);
    console.log("useEffect", !!token);
  });

  const clickHandler = () => {
    if(isLoggedin) {
      localStorage.clear();
      alert("로그아웃했습니다");
      setIsLoggedin(false);
      navigate("");
    }
    else { 
      setIsLoggedin(true);
      navigate("");
    }
  }
  return (
    <div className='login'>
      <Link to="/login">
      <button className='login-control' onClick={clickHandler}>
        {isLoggedin ? '로그아웃' : '로그인'}
      </button>
      </Link>
      <p className='login-msg'>{isLoggedin ? '환영합니다!' : '로그인 해주세요!'}</p>
    </div>
  )
}
