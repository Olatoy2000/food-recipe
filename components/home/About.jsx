import classes from './About.module.scss';
import Title from '../text/Title';
import Text from '../text/Text';

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>What Does Olatoy-Meal Offers</Title>
      <Text>
        At our Food Recipe Website, we are passionate about bringing you the best culinary experiences right at your fingertips. As a visiting user, you can expect a wide range of offerings that cater to your every need and desire.
        <br />
        <br />
        We are thrilled to have you on our Food Recipe Website, and we hope that our offerings inspire you
      </Text>
    </div>
  );
}

export default About;
