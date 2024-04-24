"use client";

import { initAnimationsAos } from "@/aos/aos";

import { useEffect, useState } from "react";

import styles from "../components/sass_components/Header.module.css";
import ButtonIconMenu from "./buttons/ButtonIconMenu";
import MenuNavigation from "./MenuNavigation";

import Logo from "./Logo";

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = () => {

  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [menuOpen,setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    initAnimationsAos()
  }, []);

  setTimeout(() => {
    setShowLogo(true);
    setShowIcon(true);
  }, 5500);


  return (
    <header id="home" className={styles.header}>
      {showLogo && (
        <div data-aos="zoom-out" className={styles.logo}>
          <Logo sizeTitleOne={18} sizeTitleTwo={12} width={30} height={30}/>
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
