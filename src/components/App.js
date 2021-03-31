import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MyPage from '../pages/MyPage';
import SignUpPage from '../pages/SignUpPage';
import NavBar from './NavBar';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar isLogged={isLogged} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/mypage" component={MyPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
