"use client";

import AOS from "aos";

import { useEffect, useState } from "react";

import styles from "../components/sass_components/Header.module.css";
import ButtonIconMenu from "./buttons/ButtonIconMenu";
import MenuNavigation from "./MenuNavigation";

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = () => {

  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [menuOpen,setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  setTimeout(() => {
    setShowLogo(true);
    setShowIcon(true);
  }, 6200);

  return (
    <header id="home" className={styles.header}>
      {showLogo && (
        <div data-aos="zoom-out" className={styles.logo}>
          <span className={styles.text_logo}>
            Lopes <br />
            Architecture
          </span>
        </div>
      )}

      {showIcon && (
        <div data-aos="zoom-out" className={styles.icon_menu}>
          <ButtonIconMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
      )}

       <MenuNavigation menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
