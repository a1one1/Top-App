import styles from "./TextArea.module.css";
import cn from "classnames";
import React from "react";
import { TextAreaProps } from "./TextArea.props";

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};
