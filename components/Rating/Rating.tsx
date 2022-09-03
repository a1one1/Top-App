import styles from "./Rating.module.css";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import StarIC from "../../static/star.svg";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rt: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(index + 1)}
        >
          <StarIC
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(index + 1, event)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>) => {
    if (event.code != "Space" || !setRating) {
      return;
    }
    setRating(index);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
    </div>
  );
};
