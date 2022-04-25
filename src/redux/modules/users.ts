// 액션 타입 선언
const ADD_USER = 'todos/ADD_USER' as const;
const LOGIN_USER = 'todos/TOGGLE_USER' as const;
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
    password: user.password
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
function users(
  state: UsersState = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case ADD_USER:
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        id: action.payload.id,
        password: action.payload.password,
        userName: action.payload.userName,
        userBirth: action.payload.userBirth
      });
    case LOGIN_USER:
      state.map(user =>
        // payload 가 number 인 것이 유추됩니다.
        // user.id === action.payload ? { ...user, done: !user.done } : user
        user.id === action.payload.id ? (user.password === action.payload.password ? true : false) : false
      );
    case REMOVE_USER:
    // payload 가 number 인 것이 유추됩니다.
    // return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
}

export default users;