import React from 'react';
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

import './Modal.css';
import Backdrop from './Backdrop';

// 建立一個專門給 Modal 使用的元件
const ModalOverLay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/* 建立一個表格其onSubmit依照父元件來判斷是否使用props.onSubmit，否則要呼叫e.preventDefault */}
      <form onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {/* 顯示背景 */}
      {props.show && <Backdrop onClick={props.onCancel} />}
      {/* 動畫顯示彈出視窗 */}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        {/* 將所有從父元件繼承的特性傳遞給ModalOverlay */}
        <ModalOverLay { ...props } />
      </CSSTransition>
    </React.Fragment>
  )
};

export default Modal;