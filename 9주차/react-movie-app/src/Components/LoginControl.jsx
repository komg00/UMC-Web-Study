import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function LoginControl() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedin(!!localStorage.getItem('token'));
  }, []);
  const handleLoginClick = () => {
    navigate('');
    setIsLoggedin(true);
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    setIsLoggedin(false);
    navigate('');
    alert('로그아웃했습니다');
  };
  return (
    <div className='login'>
      <Link to="/login">
        <button className='login-control' onClick={isLoggedin ? handleLogoutClick : handleLoginClick}>
          {isLoggedin ? '로그아웃' : '로그인'}
        </button>
        <p>{isLoggedin ? '환영합니다!' : '로그인 해주세요!'}</p>
      </Link>
    </div>
  )
}
