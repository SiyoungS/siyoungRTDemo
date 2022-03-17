import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Join from '../Pages/Join/Join'

export interface State {
  userInfo: {
    id: string,
    password: string,
    userName: string,
  };
  [key: string]: any;
}

const App = () => {
  // const [joinInput, setJoinInput] = useState<State['joinInput']>({ id: '', password: '', checkPW: '', userName: '', userBirth: '' });
  // console.log("셑조인인풋 ::: ", setJoinInput);
  // console.log("조인인풋 ::: ", joinInput);
  // console.log(props);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/join' element={<Join
        // id={''} password={''} checkPW={''} userName={''} userBirth={''}        // {...joinInput}
        />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;