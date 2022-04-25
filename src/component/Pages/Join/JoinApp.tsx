import { useDispatch } from "react-redux";
// import { RootState } from "redux/modules";
import { addUser } from "redux/modules/users";
// import { RootState } from "redux/modules";

import Join from "./Join";

function JoinApp() {
  // const users = useSelector((state: RootState) => state.users)
  // const users = useSelector((state: RootState) => state.join);
  const dispatch = useDispatch();

  const onInsert = (user: { id: string, password: string, userName: string, userBirth: string }) => {
    dispatch(addUser(user));
  };


  return (
    <>
      <Join onInsert={onInsert}></Join>
    </>
  )
}

export default JoinApp;