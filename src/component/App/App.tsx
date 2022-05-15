import JoinApp from 'component/Pages/Join/JoinApp';
import TodoApp from 'component/Todo/TodoContainer/TodoApp';
import React, { } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Nav from '../Nav/Nav';
import Login from '../Pages/Login';

const App = () => {

  // const [userInfo, setUserInfo] = useState<AppState['userInfo']>({ id: '', password: '', userName: '', userBirth: '' });
  // console.log('App States :', userInfo);

  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(userInfo);
  //   return () => {
  //     console.log('user 가 바뀌기 전..');
  //     console.log(userInfo);
  //   };
  // }, [userInfo]);

  // const settingStates = (id, password, userName, userBirth) => setUserInfo({
  //   id: id,
  //   password: password,
  //   userName: userName,
  //   userBirth: userBirth
  // });

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/join' element={<JoinApp />} />
        <Route path='/todo' element={<TodoApp />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;