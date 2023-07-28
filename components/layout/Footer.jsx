import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/new-olatoy-abiodun.png';
import Text from '../text/Text';

function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="" />
      <Text>Find the perfect meal recipe for you</Text>
      <Text className={classes.copyright}>
        &copy; Olatoy-Meal
        {' '}
        {getFullYear}
        {' '}
        All right reserved
        {' '}
      </Text>
    </footer>
  );
}

export default Footer;
