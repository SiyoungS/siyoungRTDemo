//액션 타입 선언
const ADD_JOIN = 'join/ADD_JOIN' as const;

//액션 생성 함수
export const addJoin = (user: { id: string, password: string, checkPW: string, userName: string, userBirth: string }) => ({
  type: ADD_JOIN,
  user: user
})

// 모든 액션 객체들에 대한 타입 준비
type JoinAction =
  | ReturnType<typeof addJoin>;

//상태에서 사용 할 조인 데이터 타입 정의
export type Join = {
  users: [User]
}
export type User = {
  id: string,
  password: string,
  checkPW: string,
  userName: string,
  userBirth: string,
}

//유저의 정보를 저장할 더미데이터를 만들어야 한다.
//이 모듈에서 관리할 상태는 Join 객체로 이루어진 배열
export type JoinState = Join[]

// 초기 상태 선언
const initialState: JoinState = [];

//리듀서 작성
function join(
  state: JoinState = initialState,
  action: JoinAction
): JoinState {
  switch (action.type) {
    case ADD_JOIN:
      let user: User = {
        id: action.user.id,
        password: action.user.password,
        checkPW: action.user.checkPW,
        userName: action.user.userBirth,
        userBirth: action.user.userBirth,
      }
      return state.concat({
        users: [user]
      });
    default:
      return state;
  }
}
export default join;