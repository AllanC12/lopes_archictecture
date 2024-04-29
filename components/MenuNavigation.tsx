'use client'
import { useRef } from 'react'

import Image from 'next/image'

import styles from '../components/sass_components/MenuNavigation.module.css'

import { Link } from 'react-scroll'


interface propsMenuNavigation {
  menuOpen: boolean
}

const MenuNavigation = ({menuOpen} :propsMenuNavigation) => {

  const menuNavigation = useRef<HTMLElement | null>(null)

  if(menuOpen){
    menuNavigation.current?.style.setProperty('right','0px')
  }else{
    menuNavigation.current?.style.setProperty('right','-300px')
  }

  return (
    <nav ref={menuNavigation} className={styles.menu_navigation}>
      <ul>
        <li>
          <Link to="init" spy={true} smooth={true} duration={600}>
            Início
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={600}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={600}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="contacts" spy={true} smooth={true} duration={600}>
            Contatos
          </Link>
        </li>
      </ul>

      <div className={styles.select_language}>
        <div className={styles.languages}>
          <Image src="/images/brasil.png" width={24} height={24} alt="Brasil" />
          <Image src="/images/usa.png" width={24} height={24} alt="Brasil" />
          <Image
            src="/images/spanish.png"
            width={24}
            height={24}
            alt="Brasil"
          />
        </div>
      </div>
    </nav>
  );
}

export default MenuNavigation