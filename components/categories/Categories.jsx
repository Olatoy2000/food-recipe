import BeatLoader from 'react-spinners/BeatLoader';
import classes from './Categories.module.scss';
import CategoryItem from '../CategoryItem';

function Categories({
  categories,
  categoriesIsLoading,
  categoriesIsError,
  selectedCategory,
  setSelectedCategory,

}) {
  if (categoriesIsError) {
    return ('error');
  }
  if (categoriesIsLoading) {
    return (
      <BeatLoader loading={categoriesIsLoading} color="#fff" />
    );
  }

  return (
    <div className={classes.categories__container}>
      {categories && categories.map((item) => (
        <CategoryItem
          key={item.idCategory}
          category={item}
          selectedCategory={selectedCategory}
          onClickHandler={() => setSelectedCategory(item.strCategory)}
        />
      ))}
    </div>
  );
}

export default Categories;
