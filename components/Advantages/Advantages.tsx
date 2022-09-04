import styles from "./Advantages.module.css";
import cn from "classnames";
import React from "react";
import CheckIcon from "../../static/Advantages/check.svg";
import { AdvantagesProps } from "./Advantages.props";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  console.log(advantages)
  return (
    <React.Fragment>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{advantage.title}</div>
          <hr className={styles.vline} />
          <div>{advantage.description}</div>
        </div>
      ))}
    </React.Fragment>
  );
};
