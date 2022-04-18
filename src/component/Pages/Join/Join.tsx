// import React, { useState } from 'react';
// import { JoinState } from '../../common/stateInterface';
// /**
//  * JoinProps type 셋팅
//  */
// type JoinProps = {
//   appUserState: (id: any, password: any, userName: any, userBirth: any) => void,
// };

// const Join: React.FC<JoinProps> = ({
//   //props 받아오기
//   appUserState
// }) => {

//   const [input, setInput] = useState<JoinState['input']>({ id: '', password: '', checkPW: '', userName: '', userBirth: '', });
//   const [userInfo] = useState<JoinState['userInfo']>({ id: '', password: '', userName: '', userBirth: '' });


//   //인풋 아이디 온체인지 함수
//   const onChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput({
//       id: e.target.value,
//       password: input.password,
//       checkPW: input.checkPW,
//       userName: input.userName,
//       userBirth: input.userBirth,
//     })
//   }
//   //인풋 비번 온체인지 함수
//   const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log(input);
//     setInput({
//       id: input.id,
//       password: e.target.value,
//       checkPW: input.checkPW,
//       userName: input.userName,
//       userBirth: input.userBirth,
//     })
//   }
//   //인풋 비번쳌 온체인지 함수
//   const onChangeInputCheckPW = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log(input);
//     setInput({
//       id: input.id,
//       password: input.password,
//       checkPW: e.target.value,
//       userName: input.userName,
//       userBirth: input.userBirth,
//     })
//   }
//   //인풋 유저네임 온체인지 함수
//   const onChangeInputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log(input);
//     setInput({
//       id: input.id,
//       password: input.password,
//       checkPW: input.checkPW,
//       userName: e.target.value,
//       userBirth: input.userBirth,
//     })
//   }
//   //인풋 생년월일 온체인지 함수
//   const onChangeInputUserBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log(input);
//     setInput({
//       id: input.id,
//       password: input.password,
//       checkPW: input.checkPW,
//       userName: input.userName,
//       userBirth: e.target.value,
//     })
//   }
//   // 회원가입버튼 클릭
//   const joinButton = (e: any) => {
//     e.preventDefault();//기본기능 막기
//     console.log("인풋 값 ", input);

//     //App userInfo에 SetState
//     appUserState(input.id, input.password, input.userName, input.userBirth);

//     //Join 값 초기화
//     setInput({
//       id: '',
//       password: '',
//       checkPW: '',
//       userName: '',
//       userBirth: '',
//     })
//     console.log("유저인포 :::", userInfo);

//   }
// return (
//   <div>
//     <div>
//       <h2>Join</h2>
//     </div>
//     <div>
//       <div>
//         <div>
//           <label htmlFor="">id</label>
//         </div>
//         <div>
//           <input type="text" placeholder="id입력" value={input.id}
//             onChange={onChangeInputId}
//           />
//         </div>
//       </div>
//       <div>
//         <div>
//           <label htmlFor="">pw</label>
//         </div>
//         <div>
//           <input type="password" placeholder="pw입력" value={input.password}
//             onChange={onChangeInputPassword}
//           />
//         </div>
//         <div>
//           <label htmlFor="">비번확인</label>
//         </div>
//         <div>
//           <input type="password" placeholder="pw확인" value={input.checkPW}
//             onChange={onChangeInputCheckPW} />
//         </div>
//       </div>
//       <div>
//         <div>
//           <label htmlFor="">이름</label>
//         </div>
//         <div>
//           <input type="text" placeholder="이름" value={input.userName} onChange={onChangeInputUserName} />
//         </div>
//       </div>
//       <div>
//         <div>
//           <label htmlFor="">생년월일</label>
//         </div>
//         <div>
//           <input type="date" placeholder="생년월일" value={input.userBirth} onChange={onChangeInputUserBirth} />
//         </div>
//       </div>
//     </div>
//     <button onClick={joinButton}>회원가입</button>
//   </div>
// )
// }

// export default Join;

import React, { ChangeEvent, FormEvent, useState } from 'react';

type JoinProps = {
  onInsert: (user: { id: string, password: string, checkPW: string, userName: string, userBirth: string }) => void;
}
function JoinInsert({ onInsert }: JoinProps) {
  const [user, setUser] = useState({ id: '', password: '', checkPW: '', userName: '', userBirth: '' });

  const onChangeInputId = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      id: e.target.value,
      password: user.password,
      checkPW: user.checkPW,
      userName: user.userName,
      userBirth: user.userBirth
    });
  }
  const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      id: user.id,
      password: e.target.value,
      checkPW: user.checkPW,
      userName: user.userName,
      userBirth: user.userBirth
    });
  }
  const onChangeInputCheckPW = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      id: user.id,
      password: user.password,
      checkPW: e.target.value,
      userName: user.userName,
      userBirth: user.userBirth
    });
  }
  const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      id: user.id,
      password: user.password,
      checkPW: user.checkPW,
      userName: e.target.value,
      userBirth: user.userBirth
    });
  }
  const onChangeInputUserBirth = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      id: user.id,
      password: user.password,
      checkPW: user.checkPW,
      userName: user.userName,
      userBirth: e.target.value
    });
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('before===', user)
    onInsert(user);
    setUser({
      id: '',
      password: '',
      checkPW: '',
      userName: '',
      userBirth: ''
    });
    console.log('after====', user)
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
              value={user['id']}
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
              value={user['password']}
              name='password'
              onChange={onChangeInputPassword}
            />
          </div>
          <div>
            <label htmlFor="">비번확인</label>
          </div>
          <div>
            <input type="password" placeholder="pw확인"
              value={user['checkPW']}
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
              value={user['userName']}
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
              value={user['userBirth']}
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