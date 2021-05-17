import { useState } from "react";
import { Link } from "react-scroll";

import styles from "../styles/components/NavBar.module.css";

export function NavBar() {
  const [navBarClasses, setNavBarClasses] = useState(
    `nav-bar ${styles.navBar}`
  );
  const [navBarStatus, setNavBarStatus] = useState(false);
  function activateNavBar() {
    setNavBarClasses(`nav-bar ${styles.navBar} ${styles.active}`);
    setNavBarStatus(true);
  }

  function closeNavBar() {
    if (navBarStatus) {
      setNavBarClasses(`nav-bar ${styles.navBar}`);
      setNavBarStatus(true);
    }
  }

  return (
    <nav className={styles.navContainer}>
      <div className={`container ${styles.container}`}>
        <a href="#top" rel="noopener" className={`logo ${styles.logo}`}>
          <img
            src="./assets/images/logo.svg"
            alt="Logo website"
            className="hide-on-small-only"
          />
        </a>

        <a
          onClick={activateNavBar}
          rel="noopener"
          className={`mobile-menu ${styles.mobileMenu}`}
        >
          <i className="fas fa-bars"></i>
        </a>

        <ul className={navBarClasses}>
          <li className={styles.navItem}>
            <a
              onClick={closeNavBar}
              href="#top"
              rel="noopener"
              className={`nav-link ${styles.navLink} ${styles.closeMobile}`}
            >
              <i className="fas fa-times"></i>
            </a>
          </li>
          <li className={styles.navItem}>
            <Link
              to="top"
              className={`nav-link ${styles.navLink}`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeNavBar}
            >
              Início
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="about"
              className={`nav-link ${styles.navLink}`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeNavBar}
            >
              Sobre
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="works"
              className={`nav-link ${styles.navLink}`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeNavBar}
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="contact"
              className={`nav-link ${styles.navLink}`}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeNavBar}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
