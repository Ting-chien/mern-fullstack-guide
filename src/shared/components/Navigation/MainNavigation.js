import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = () => {

  // 設定drawer是否打開，預設為關閉
  const [drawIsOpen, setDrawIsOpen] = useState(false);

  // 點擊漢堡圖示時打開側邊欄
  const openDrawerHandler = () => {
    setDrawIsOpen(true);
  }
  // 點擊背景時關閉側邊欄
  const closeDrawerHandler = () => {
    setDrawIsOpen(false);
  }

  return (
    // 使用React.Fragment讓JSX可回傳多個main elements
    <React.Fragment>
      {/* 透過drawer是否打開來判斷是否要渲染Backdrop */}
      { drawIsOpen && <Backdrop onClick={closeDrawerHandler} /> }
      {/* 在這裡使用三元運算子判斷drawer是否要被展開 */}
      <SideDrawer show={drawIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces...</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
};

export default MainNavigation;