import styles from "./Review.module.css";
import { ReviewProps } from "./Review.props";
import cn from "classnames";
import UserIcon from "../../static/Review/user.svg";
import { Rating } from "../Rating/Rating";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";

export const Review = ({
  review,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />

      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;&nbsp;
        <span>{title}</span>
      </div>

      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyy", { locale: ru })}
      </div>

      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};
