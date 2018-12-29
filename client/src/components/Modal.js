//Start imports
import React from "react";
import ReactDOM from "react-dom";

/**
 * Modal is a functional component that displays a generic modal used to prompt
 * the user to take some form of action
 **/
const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

/**
 * export our Modal component
 **/
export default Modal;
