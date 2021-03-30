import axios from 'axios';
import React, { useEffect } from 'react';

const App = () => {
  const databaseURL = 'https://fir-study-2ceb7-default-rtdb.firebaseio.com';
  useEffect(() => {
    axios
      .post(`${databaseURL}/test.json`, {
        test: '테스트',
      })
      .then((res) => console.log(res));
  }, []);

  return <h1>테스트</h1>;
};
export default App;
