import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function LoginControl() {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/login');
  };

  return (
    <div className='login'>
      <Link to="/login">
        <button className='login-control' onClick={onClickBtn}>
          로그인
          </button>
      </Link>
    </div>
  )
}
