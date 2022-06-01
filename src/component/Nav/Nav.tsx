import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../Nav/nav.module.scss'

interface State {
  menuToggle: boolean,
  currentPageIndex: number,
  menus: any[],
  userInfo: {
    id: string,
    address: string,
  },
  [key: string]: any;
};

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState<State['menuToggle']>(false);
  const [currentPageIndex, setCurrentPageIndex] = useState<State['currentPageIndex']>(0);
  const [menus] = useState<State['menus']>(
    [
      { name: "Main", address: "/" },
      { name: "Join", address: "/Join" },
      { name: "Todo", address: "/Todo" },
      { name: "Login", address: "/Login" },
      { name: "Board", address: "/Board" },
    ]);

  console.log('test:', menuToggle, '\n', currentPageIndex)
  //대문자로 사용
  const UseStateMenuToggle = (flag: boolean, idx: React.SetStateAction<number>) => {
    setMenuToggle(flag);
    setCurrentPageIndex(idx);
  }

  const navItem = (data, index) => {
    const { name, address } = data;

    //현재 페이지의 url로 메뉴 선택 css효과 사용
    let currentUrlName = window.location.pathname;
    // 로그인 중에 Login페이지 이동 막고, css효과 사용
    let loginCheck = (name === "Logins")
    return (
      <Link id={index + 'nav_items_id'} key={index} to={loginCheck ? '#' : `${address}`} className={style.navLink}
        aria-current={currentUrlName === address ? "page" : undefined}
        aria-readonly={loginCheck ? true : undefined}
        onClick={() => {
          if (loginCheck) {
            console.log('alread login')
          } else {
            UseStateMenuToggle(false, index)
          }
        }}
      >
        {name}
      </Link>
    )
  }

  return (
    <div className={style.nav}>
      <div className={style.nav_Links}>
        {menus?.map((data, index) => navItem(data, index))}
      </div>
      {/* <div className={style.nav_login}>
        {userInfo.id.trim() !=='' && (
            <div>{userInfo.id + '님이 로그인중입니다.'}</div>
      </div> */}
    </div>
  )
}

export default Nav