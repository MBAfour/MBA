import React from "react";
import styles from "./Mypage.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Mypage() {
  return (
    <div className={styles.wrap}>
      <h1>마이페이지</h1>
      <ul className="tabs boxed">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          to="/mypage/memberInfo">
          개인정보
        </NavLink>

        <NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })} to="/mypage/salelist">
          판매내역
        </NavLink>

        <NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })} to="/mypage/bestbidlist">
          최고응찰내역
        </NavLink>

        <NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })} to="/mypage/wishlist">
          위시리스트
        </NavLink>

      </ul>
      <Outlet />
      <div className={styles.clear}></div>
    </div >
  );
}

export default Mypage;


