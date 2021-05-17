import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
  return <header className="main-header">
    {/* props.children 是用於將 MainNavigation 中的範圍內元素 */}
    {props.children}
  </header>
}

export default MainHeader;