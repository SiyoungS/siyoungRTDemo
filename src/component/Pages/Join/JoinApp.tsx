import { useDispatch } from "react-redux";
// import { RootState } from "redux/modules";
import { addJoin } from "redux/modules/join";
import Join from "./Join";

function JoinApp() {
  // const users = useSelector((state: RootState) => state.join);
  const dispatch = useDispatch();

  const onInsert = (user: { id: string, password: string, checkPW: string, userName: string, userBirth: string }) => {
    dispatch(addJoin(user));
  };

  return (
    <>
      <Join onInsert={onInsert}></Join>
    </>
  )
}

export default JoinApp;