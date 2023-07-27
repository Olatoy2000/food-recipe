import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './Navbar.module.scss';
import logo from '../../images/header-olatoy.png';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <a href="" className={classes.logo}>
          <Image src={logo} alt="" />
        </a>
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">
            Meals
          </Link>
        </li>
        <li>
          <Link href="/savedMeals">
            Saved Lists
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
