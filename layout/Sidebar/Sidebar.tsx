import styles from "./Sidebar.module.css";
import React from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../../static/Logo/logo.svg";
import cn from "classnames";
import { Search } from "../../components";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}/>
      <Search/>
      <Menu />
    </div>
  );
};
