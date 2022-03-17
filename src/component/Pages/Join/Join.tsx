import React, { useState } from 'react';
// import { State } from '../../App/App'

interface State {
  input: {
    id: string,
    password: string,
    checkPW: string,
    userName: string,
    userBirth: string,
  },
  userInfo: {
    id: string,
    password: string,
    userName: string,
    userBirth: string,
  },
  [key: string]: any,
}
const Join = (
  // props:any
  // state: State['input, userInfo']
) => {
  // console.log(state);
  // const [joinInput, setJoinInput] = useState<State['joinInput']>({ id: '', password: '', checkPW: '', userName: '', userBirth: '' });
  const [input, setInput] = useState<State['input']>({ id: '', password: '', checkPW: '', userName: '', userBirth: '', });
  const [userInfo, setUserInfo] = useState<State['userInfo']>({ id: '', password: '', userName: '', userBirth: '' });


  //인풋 아이디 온체인지 함수
  const onChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      id: e.target.value,
      password: input.password,
      checkPW: input.checkPW,
      userName: input.userName,
      userBirth: input.userBirth,
    })
  }
  //인풋 비번 온체인지 함수
  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(input);
    setInput({
      id: input.id,
      password: e.target.value,
      checkPW: input.checkPW,
      userName: input.userName,
      userBirth: input.userBirth,
    })
  }
  //인풋 비번쳌 온체인지 함수
  const onChangeInputCheckPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(input);
    setInput({
      id: input.id,
      password: input.password,
      checkPW: e.target.value,
      userName: input.userName,
      userBirth: input.userBirth,
    })
  }
  //인풋 유저네임 온체인지 함수
  const onChangeInputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(input);
    setInput({
      id: input.id,
      password: input.password,
      checkPW: input.checkPW,
      userName: e.target.value,
      userBirth: input.userBirth,
    })
  }
  //인풋 생년월일 온체인지 함수
  const onChangeInputUserBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(input);
    setInput({
      id: input.id,
      password: input.password,
      checkPW: input.checkPW,
      userName: input.userName,
      userBirth: e.target.value,
    })
  }
  // 회원가입버튼 클릭
  const joinButton = (e: any) => {
    e.preventDefault();//기본기능 막기

    // let dumyUserData = {
    //   id: input.id,
    //   password: input.password,
    //   userName: input.userName,
    //   userBirth: input.userBirth,
    // }
    console.log("인풋 값 ", input);
    setUserInfo({
      id: input.id,
      password: input.password,
      userName: input.userName,
      userBirth: input.userBirth,
    })
    //값 초기화
    setInput({
      id: '',
      password: '',
      checkPW: '',
      userName: '',
      userBirth: '',
    })
    console.log("유저인포 :::", userInfo);

  }
  return (
    <div>
      <div>
        <h2>Join</h2>
      </div>
      <div>
        <div>
          <div>
            <label htmlFor="">id</label>
          </div>
          <div>
            <input type="text" placeholder="id입력" defaultValue={input.id}
              onChange={onChangeInputId}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">pw</label>
          </div>
          <div>
            <input type="password" placeholder="pw입력" value={input.password}
              onChange={onChangeInputPassword}
            />
          </div>
          <div>
            <label htmlFor="">비번확인</label>
          </div>
          <div>
            <input type="password" placeholder="pw확인" value={input.checkPW}
              onChange={onChangeInputCheckPW} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">이름</label>
          </div>
          <div>
            <input type="text" placeholder="이름" value={input.userName} onChange={onChangeInputUserName} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">생년월일</label>
          </div>
          <div>
            <input type="date" placeholder="생년월일" value={input.userBirth} onChange={onChangeInputUserBirth} />
          </div>
        </div>
      </div>
      <button onClick={joinButton}>회원가입</button>
    </div>
    //콜백으로 받은 값을 더미데이터로 app에 저장, id만 defaultValue로 안쓰면 오류남, 
  )
}

export default Join;


