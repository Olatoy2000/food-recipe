import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import classes from './meals.module.scss';
import SearchBar from '../../components/mealsPage/SearchBar';
import PointText from '../../components/text/PointText';
import Categories from '../../components/categories/Categories';
import SingleMealCard from '../../components/mealsPage/SingleMealCard';

const override = {
  display: 'inline-block',
  margin: '0 auto',
};
const getCategories = async () => {
  const { data } = await axios.get('/categories.php');
  return data.categories;
};

const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
};

function Meal() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError } = useQuery(['categories'], getCategories);
  const { data, isError, isLoading } = useQuery(['mealByCategories', selectedCategory], getMeals);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

  return (
    <section className={classes.meals__page}>
      <SearchBar />
      <PointText className={classes.text}>search meals or select categories from below.</PointText>
      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {isLoading || categoriesIsLoading ? (
        <div className={classes.loadingSpinner}>
          <BeatLoader color="#fff" loading={isLoading || categoriesIsLoading} cssOverride={override} size={20} />
        </div>
      ) : null}

      {!isLoading && !isError && data && data.map((meal) => (
        <SingleMealCard meal={meal} key={meal.idMeal} />
      ))}
    </section>
  );
}

export default Meal;
