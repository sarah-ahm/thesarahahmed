import React, { useState } from "react";
import Logo from '../Logo'
import styles from '../../styles/Header.module.scss';

const NavBar = ({home}) => {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav}>
        {!home && (
          <a className={styles.logo} href="/">
            <Logo/>
          </a>
        )}
        <div className={styles.nav__menubar}>
          <nav aria-label="Menu">
            <button type="button" className="" aria-controls="navigation" aria-label="Show or hide menu" hidden>Menu</button>
            <ul id="navigation" className={styles.nav__list}>
              <li className={styles.nav__link}>
                <a href="/about">
                  About
                </a>
              </li>
              <li className={styles.nav__link}>
                <a href="#2">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;