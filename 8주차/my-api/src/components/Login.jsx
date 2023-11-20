import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserInfo } from '../reducer/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!userId || !userPw) {
        alert('아이디와 비밀번호를 입력하세요.');
        return;
      }

      setLoading(true);

      const endpoint = 'http://localhost:3000/user/login';
      const requestBody = {
        id: userId,
        pw: userPw,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 응답 데이터 확인
      console.log(response.data);

      // 토큰 저장 (Redux를 사용하여 상태 관리)
      dispatch(setUserInfo(response.data.result));

      // 로딩 상태 변경
      setLoading(false);
    } catch (error) {
      // 오류 처리
      console.error('Error during POST request:', error);
      // 로딩 상태 변경
      setLoading(false);
    }
  };

  useEffect(() => {
    // 토큰 검증 등 추가 작업이 필요한 경우 여기에 작성
  }, [dispatch]);

  return (
    <div>
      <label>
        아이디:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : '로그인'}
      </button>
    </div>
  );
};

export default Login;
