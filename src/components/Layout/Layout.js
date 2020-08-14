import React from "react";
import style from "./Layout.module.css";

const Layout = (props) => (
  <>
    <div> Toolbar, Sidedrawer, Backdrop</div>
    <main className={style.Content}>{props.children}</main>
  </>
);

export default Layout;
