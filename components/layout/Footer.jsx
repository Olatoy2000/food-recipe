import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/new-olatoy-abiodun.png';

function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="" />
      <p>Find the perfect meal recipe for you</p>
      <p>
        &copy; Olatoy-Meal
        {' '}
        {getFullYear}
        {' '}
        All right reserved
        {' '}
      </p>
    </footer>
  );
}

export default Footer;
