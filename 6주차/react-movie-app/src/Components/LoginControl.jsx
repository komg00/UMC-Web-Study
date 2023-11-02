import React, { useState } from 'react'

export default function LoginControl() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedin(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedin(false);
  }
  return (
    <div className='login'>
      <button className='login-control' onClick={isLoggedin ? handleLogoutClick : handleLoginClick}>
        {isLoggedin ? '로그아웃' : '로그인'}
      </button>
      <p className='login-text'>{isLoggedin ? '환영합니다!' : '로그인 해주세요!'}</p> 
    </div>
  )
}
