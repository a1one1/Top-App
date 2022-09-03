import styles from "./Sidebar.module.css";
import React from "react";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
