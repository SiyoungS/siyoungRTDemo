import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/modules';
import { loginUser, User } from 'redux/modules/users';


function Login() {
  const users = useSelector((state: RootState) => state.users);
  // const users = useSelector((state: RootState) => state.join);
  const dispatch = useDispatch();

  const loginUserFunc = (user: user) => {
    dispatch(loginUser(user));
  };

  return (
    <>
      <LoginPage users={users} loginUser={loginUserFunc}></LoginPage>
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

  // type loginUserFunc = {
  //   user:{
  //     id: string;
  //     password: string;
  //   }
  // }
  const [inputID, setID] = useState('');
  const [inputPW, setPW] = useState('');
  const onChangeID = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value)
  };
  const onChangePW = (e: ChangeEvent<HTMLInputElement>) => {
    setPW(e.target.value)
  };
  const loginCheck = async () => {
    console.log(`로그인 버튼 클릭 ::: ${users}`)
    loginUser({ id: inputID, password: inputPW });
    let login_url = "http://localhost:5001/auth/login";
    let login_data = {
      "userId": inputID,
      "password": inputPW,
    }

    await axios.post(login_url, login_data,
      {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then((res) => {
      //여기는 post login 성공
      //여기서 바꿔주고 셋팅해야할 것들
      //message 알림창, jwttoken유무로 한번 더 체크 후 화면 상단에 로그인 되었습니다. 만들어주기
      if (res.data.authToken) {
        alert(`${res.data.message} 로그인에 성공하셨습니다.`);
      }

    }, (rej) => {
      // console.log('reject=', rej);
      alert(`${rej} 로그인에 실패하셨습니다.`);
    }).catch((err) => {
      console.log('ERROR =', err);
    });

  };//login Check End Fun

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
