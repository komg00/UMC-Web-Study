import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "../pages/Home";

export default function KakaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const username = localStorage.getItem('name');
  useEffect(() => {
    const headers = {
      "Content-type": "application/x-www-form-urlencoded",
    };

    fetch(`http://localhost:8000/kakao?code=${code}`, {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result.name);
        localStorage.setItem('name', data.result.name);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [code, navigate])

  
  return (
    <div>
      {username ? <Home /> : <h1>로그인 중입니다.</h1>}
    </div>
  )
}
