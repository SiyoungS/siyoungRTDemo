import React, { ChangeEvent, useState } from 'react';

type UserProps = {
  onInsert: (user: { id: string, password: string, userName: string, userBirth: string }) => void;
}
function JoinInsert({ onInsert }: UserProps) {
  // const [value, setValue] = useState({ id: '', password: '', userName: '', userBirth: '' });
  const [inputID, setID] = useState('');
  const [inputPW, setPW] = useState('');
  const [inputPWcheck, setPWcheck] = useState('');
  const [inputName, setName] = useState('');
  const [inputBirth, setBirth] = useState('');
  const onChangeInputId = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value)
  };
  const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPW(e.target.value)
  };
  const onChangeInputCheckPW = (e: ChangeEvent<HTMLInputElement>) => {
    setPWcheck(e.target.value)
  };
  const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };
  const onChangeInputUserBirth = (e: ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value)
  };
  const onSubmit = () => {
    onInsert({ id: inputID, password: inputPW, userName: inputName, userBirth: inputBirth });
    setID('');
    setPW('');
    setPWcheck('');
    setName('');
    setBirth('');
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
            <input type="text" placeholder="id입력"
              value={inputID}
              name='id'
              onChange={onChangeInputId}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">pw</label>
          </div>
          <div>
            <input type="password" placeholder="pw입력"
              value={inputPW}
              name='password'
              onChange={onChangeInputPassword}
            />
          </div>
          <div>
            <label htmlFor="">비번확인</label>
          </div>
          <div>
            <input type="password" placeholder="pw확인"
              value={inputPWcheck}
              name='checkPW'
              onChange={onChangeInputCheckPW} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">이름</label>
          </div>
          <div>
            <input type="text" placeholder="이름"
              value={inputName}
              name='userName'
              onChange={onChangeInputUserName} />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">생년월일</label>
          </div>
          <div>
            <input type="date" placeholder="생년월일"
              value={inputBirth}
              name='userBirth'
              onChange={onChangeInputUserBirth} />
          </div>
        </div>
      </div>
      <button onClick={onSubmit}>회원가입</button>
    </div>
  )
}

export default JoinInsert;