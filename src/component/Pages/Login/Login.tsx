import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/modules';
import { User } from 'redux/modules/users';

function Login() {
  const users = useSelector((state: RootState) => state.users);
  // const users = useSelector((state: RootState) => state.join);
  const dispatch = useDispatch();

  const loginUser = (user: user) => {
    dispatch(loginUser(user));
  };

  return (
    <>
      <LoginPage users={users} loginUser={loginUser}></LoginPage>
    </>
  )
}
type user = {
  id: string;
  password: string;
}
type UserProps = {
  users: User[];
  loginUser: (user: user) => void;
}
function LoginPage({ users }: UserProps) {
  const [inputID, setID] = useState('');
  const [inputPW, setPW] = useState('');
  const onChangeID = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value)
  };
  const onChangePW = (e: ChangeEvent<HTMLInputElement>) => {
    setPW(e.target.value)
  };
  const loginCheck = () => {
    console.log('users::', users)
    users.filter((v) => {
      if (v.id === inputID) {
        if (v.password === inputPW) {
          return alert('login success');
        } else {
          return alert('login fail');
        };
      } else {
        return alert('login fail');
      };
    });

  }

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <input
          type="text"
          value={inputID}
          onChange={onChangeID} />
        <input
          type="text"
          value={inputPW}
          onChange={onChangePW} />
        <button onClick={loginCheck}>로그인</button>
      </div>

    </div>
  )
}

export default Login;
