// 액션 타입 선언
const ADD_LOGIN = 'login/ADD_LOGIN' as const;

//액션생성함수
export const addLogin = (userLogin: { id: string, password: string }) => ({
  type: ADD_LOGIN,
  userLogin: userLogin
})

// 모든 액션 객체들에 대한 타입 준비
type LoginAction =
  | ReturnType<typeof addLogin>;

//상태에서 사용할 로그인 데이터 타입 정의
export type Login = {
  loginUser: {
    id: string,
    password: string
  }
}
//이 모듈에서 관리할 상태는 Login 객체
export type LoginState = Login;

//초기 상태 선언
const initialState: LoginState = {
  loginUser: {
    id: '',
    password: ''
  }
}

//리듀서 작성
function login(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case ADD_LOGIN:
      // let Login: Login = {
      //   loginUser: {
      //     id: action.userLogin.id,
      //     password: action.userLogin.password
      //   }
      // }
      return state;
    default:
      return state;
  }
}
export default login;