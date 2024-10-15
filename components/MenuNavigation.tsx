"use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import Image from "next/image";

import styles from "../components/sass_components/MenuNavigation.module.css";

import { Link } from "react-scroll";

interface propsMenuNavigation {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const MenuNavigation = ({ menuOpen,setMenuOpen }: propsMenuNavigation) => {
  const menuNavigation = useRef<HTMLElement | null>(null);
  const listLinksRef = useRef<HTMLUListElement>(null)
  const listLinks = listLinksRef.current

  const closeMenuBar = () => {
    menuNavigation.current?.style.setProperty("right", "-200px");
    setTimeout(() => {
      menuNavigation.current?.style.setProperty("display","none")
    }, 500);
  }

  const openMenuBar = () => {
    menuNavigation.current?.style.setProperty("display","block")
    setTimeout(() => {
      menuNavigation.current?.style.setProperty("right", "0px");
    }, 100);
  }

  const verifyMenuOpen = () => {
    if (menuOpen) {
      openMenuBar()
    } else {
      closeMenuBar()
    }
  };

  useEffect(() => {
    verifyMenuOpen();
  }, [menuOpen]);
  
  return (
    <nav ref={menuNavigation} className={styles.menu_navigation}>
        <ul ref={listLinksRef} >
        <li>
          <Link onClick={()=> setMenuOpen(false)} to="init" spy={true} smooth={true} duration={600}>
            Início
          </Link>
        </li>
        <li>
          <Link onClick={()=> setMenuOpen(false)} to="projects" spy={true} smooth={true} duration={600}>
            Projetos
          </Link>
        </li>
        <li>
          <Link onClick={()=> setMenuOpen(false)} to="about" spy={true} smooth={true} duration={600}>
            Sobre
          </Link>
        </li>
        <li>
          <Link onClick={()=> setMenuOpen(false)} to="contacts" spy={true} smooth={true} duration={600}>
            Contatos
          </Link>
        </li>
      </ul>

      <div className={styles.select_language}>
        <div className={styles.languages}>
          <Image src="/images/brasil.png" width={20} height={20} alt="Brasil" />
          <Image src="/images/usa.png" width={20} height={20} alt="Brasil" />
          <Image src="/images/spanish.png" width={20} height={20} alt="Brasil"/>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;
