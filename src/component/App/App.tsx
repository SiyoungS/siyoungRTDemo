import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Join from '../Pages/Join';
import { AppState } from '../common/stateInterface';
import Nav from '../Nav/Nav'

const App = () => {
  
  const [userInfo, setUserInfo] = useState<AppState['userInfo']>({ id: '', password: '', userName: '', userBirth: '' });
  console.log('App States :', userInfo);

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(userInfo);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(userInfo);
    };
  }, [userInfo]);

  const settingStates=(id, password, userName, userBirth)=>setUserInfo({
    id:id,
    password:password,
    userName:userName,
    userBirth:userBirth
  });

  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/join' element={<Join
          appUserState={settingStates}
        />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;