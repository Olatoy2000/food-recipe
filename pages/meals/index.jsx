import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import classes from './meals.module.scss';
import SearchBar from '../../components/mealsPage/SearchBar';
import PointText from '../../components/text/PointText';
import Categories from '../../components/categories/Categories';

const getCategories = async () => {
  const { data } = await axios.get('/categories.php');
  return data.categories;
};
function Meal() {
  const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError } = useQuery(['categories'], getCategories);
  return (
    <section className={classes.meals__page}>
      <SearchBar />
      <PointText className={classes.text}>search meals or select categories from below.</PointText>
      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
      />
    </section>
  );
}

export default Meal;
