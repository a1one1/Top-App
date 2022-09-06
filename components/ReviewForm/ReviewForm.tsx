import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { ReviewFormProps } from "./ReviewForm.props";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from "../../static/Review/close.svg";
import React from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Мы обязательно опубликуем ваш отзыв после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </React.Fragment>
  );
};
