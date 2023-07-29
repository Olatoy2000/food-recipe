import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './SingleMealCard.module.scss';
import Title from '../text/Title';

function SingleMealCard({ meal }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('this is showing the meal data', meal);
  }, [meal]);

  return (
    <Link href={`/meals/${meal.idMeal}`}>
      <a className={classes.item}>
        <Image height="200" width="200" src={meal.strMealThumb} />
        <Title
          className={classes.title}
          variant="secondary"
        >
          {meal.strMeal}

        </Title>
      </a>
    </Link>
  );
}

export default SingleMealCard;
