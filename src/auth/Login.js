// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import {fetchAndMergeCartData} from "../cart/cartStorage";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password
            });

            if (response.status === 200) {
                // 로그인 성공 시 처리 (예: 토큰 저장, 리다이렉트)
                localStorage.setItem('token', response.data.accessToken);

                // 로그인 성공 시 로컬 스토리지와 db 의 장바구니 병합
                await fetchAndMergeCartData(localStorage.getItem('token'));

                alert('로그인 성공!');
                // 예: 대시보드 페이지로 이동
                navigate('/');
            }
        } catch (error) {
            setError('로그인 실패: 이메일 또는 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이메일:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
