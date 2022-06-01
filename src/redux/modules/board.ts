// 액션 타입 선언
const ADD_BOARD = "board/ADD_CREATE" as const;

let boardNumber = 1; //새로운 항목을 추가 할 때 사용 할 고유 ID값

//액션 생성 함수
export const addBoard = (text: string) => ({
  type: ADD_BOARD,
  payload: {
    id: boardNumber++,
    text
  }
})

// 모든 액션 객체들에 대한 타입 준비 
type BoardAction =
  | ReturnType<typeof addBoard>

//상태에서 사용 할 데이터 타입 정의
export type Board = {
  id: number;
  text: string;
  done: boolean
}

// 관리할 생태는 객체로 이루어진 배열
export type BoardState = Board[];

// 초기 상태 선언
const initialState: BoardState = [];

// 리듀서 작성
function board(
  state: BoardState = initialState,
  action: BoardAction
): BoardState {
  switch (action.type) {
    case ADD_BOARD:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      });
    default:
      return state;
  }
}

export default board;