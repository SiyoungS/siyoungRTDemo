import axios from "axios";

// 액션 타입 선언
const ADD_USER = 'todos/ADD_USER' as const;
const LOGIN_USER = 'todos/LOGIN_USER' as const;
const REMOVE_USER = 'todos/REMOVE_USER' as const;

// let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값
export type User = {
  id: string,
  password: string,
  userName: string,
  userBirth: string,
}
// 액션 생성 함수
export const addUser = (user: User) => ({
  type: ADD_USER,
  payload: {
    id: user.id,
    password: user.password,
    userName: user.userName,
    userBirth: user.userBirth
  }
});

export const loginUser = (user: { id: string, password: string }) => ({
  type: LOGIN_USER,
  payload: {
    id: user.id,
    password: user.password,
    done: false
  }
});

export const removeUser = (id: number) => ({
  type: REMOVE_USER,
  payload: id
});

// 모든 액션 객체들에 대한 타입 준비
type UsersAction =
  | ReturnType<typeof addUser>
  | ReturnType<typeof loginUser>
  | ReturnType<typeof removeUser>;


// 이 모듈에서 관리할 상태는 user 객체로 이루어진 배열
export type UsersState = User[];
// 만약 로그인 된 기록 같은걸 확인할때 해봐라.
// export type LoginUserState = User;
// 초기 상태 선언
const initialState: UsersState = [];

// 리듀서 작성
async function users(
  state: UsersState = initialState,
  action: UsersAction
): Promise<UsersState | Promise<any>> {
  switch (action.type) {
    case ADD_USER:
      // const newState = {...state}; 스테이트 불변성을 위해서 
      let url = 'http://localhost:5001/auth/register';
      let data = {
        "userId": action.payload.id,
        "username": action.payload.userName,
        "password": action.payload.password,
        "authorities": ["ROLE_USER"]
      }
      let result = axios.post(url, data, {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      console.log('result==', result);

      // return state;
      // console.log('조인 리덕스 들어옴');
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        id: action.payload.id,
        password: action.payload.password,
        userName: action.payload.userName,
        userBirth: action.payload.userBirth,
      });

    case LOGIN_USER:
      // console.log('로그인 유저 리덕스 들어옴');

      // console.log('id::', action.payload.id)
      // console.log('pwpw::', action.payload.password)
      // let url_login = "http://localhost:5001/auth/login";
      // let data_login = {
      //   "userId": action.payload.id,
      //   "password": action.payload.password
      // }
      // let result_login = await axios.post(url_login, data_login,
      //   {
      //     headers: {
      //       "accept": "application/json",
      //       "Content-Type": "application/json"
      //     }
      //   }
      // ).then((res) => {
      //   console.log('res=', res)
      // }, (rej) => {
      //   console.log('reject=', rej);
      // }).catch((err) => {
      //   console.log('ERROR =', err);
      // });
      // console.log('result login=', result_login);
      // state.map(user =>
      //   // payload 가 number 인 것이 유추됩니다.
      //   // user.id === action.payload ? { ...user, done: !user.done } : user
      //   user.id === action.payload.id ? (user.password === action.payload.password ? true : false) : false
      // );

      console.log('로그인 유저 리듀서 들어옴');
      return state.map((user) =>
        user.id === action.payload.id ? (user.password === action.payload.password ? action.payload.done = true : false) : false
      );
    case REMOVE_USER:
    // payload 가 number 인 것이 유추됩니다.
    // return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
}

export default users;