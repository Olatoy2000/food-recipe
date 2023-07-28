import BeatLoader from 'react-spinners/BeatLoader';
import classes from './Categories.module.scss';

function Categories({
  categories,
  categoriesIsLoading,
  categoriesIsError,
  categoryError,
}) {
  if (categoriesIsLoading) {
    return (
      <BeatLoader color="#fff" />
    );
  }

  if (categoriesIsError) {
    return (
      <div>
        Error:
        {' '}
        {categoryError.message}
      </div>
    );
  }

  return (
    <div className={classes.categories__container}>
      {categories.map((item) => (
        <p key={item.idCategory}>{item.strCategory}</p>
      ))}
    </div>
  );
}

export default Categories;
