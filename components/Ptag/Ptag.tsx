import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";
import React from "react";

export const Ptag = ({
  size = "average",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.average]: size == "average",
        [styles.big]: size == "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
