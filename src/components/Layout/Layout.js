import React from "react";
import style from "./Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className={style.Content}>{props.children}</main>
  </>
);

export default Layout;
