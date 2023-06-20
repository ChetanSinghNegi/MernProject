import React from "react";
import "./SideDrawer.css";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(content, document.getElementById("drawer-hook")); //using portal to teleport this jsx element in side of root element. go to index.html for more info
};

export default SideDrawer;
