import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLogged }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/">홈</Link>
      {isLogged ? (
        <Link to="/mypage">마이페이지</Link>
      ) : (
        <div>
          <Link to="login">로그인</Link>
          <Link to="signup">회원가입</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
