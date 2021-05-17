import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = (
    // 透過props.show來判斷是否要展開側邊欄，並使用mountOnEnter, unmountOnExit將drawer加入或移除DOM
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  )
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook')); // 告訴portals哪些內容要在什麼時候被選染出來
};

export default SideDrawer;