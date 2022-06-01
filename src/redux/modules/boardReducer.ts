// 액션 타입 선언
const DATA_SAVE = 'board/DATA_SAVE' as const;

//액션 생성 함수
export const dataSave = (inputData: { id: number, title: string, content: string }) => ({
  type: DATA_SAVE,
  inputData: {
    id: inputData.id,
    title: inputData.title,
    content: inputData.content
  }
})

// 모든 액션 객체들에 대한 타입 준비
type BoardAction =
  | ReturnType<typeof dataSave>

// 상태에서 사용 할 데이터 타입
export type Board = {
  lastId: 0,
  inputData: [
    {
      id: number,
      text: string,
      content: boolean,
    }
  ]
}

// 관리할 상태는 Board 객체로 이루어진 배열
export type BoardState = Board[];

// const initialState = {
//   lastId: 0,
//   inputData: [
//     {
//       id: '',
//       title: '',
//       content: '',
//     }
//   ]
// }

const initialState: BoardState = [];

export default function boardReducer(
  state = initialState,
  action: BoardAction
) {
  switch (action.type) {
    case DATA_SAVE:
      console.log(state);
      return {
        // lastId: state.lastId + 1,
        // inputData: state.inputData.concat({
        //   ...action.inputData,
        //   id: state.lastId + 1,

        // }


      }
    default:
      return state;
  }
}