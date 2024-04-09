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
    menuNavigation.current?.style.setProperty('right','0')
  }else{
    menuNavigation.current?.style.setProperty('right','-200px')
  }

  return (
    <nav ref={menuNavigation} className={styles.menu_navigation}>
        <ul>
            <li><Link to="/home">Início</Link></li>
            <li><Link to="projects">Projetos</Link></li>
            <li><Link to="about">Sobre</Link></li>
            <li><Link to="contacts">Contatos</Link></li>
        </ul>

        <div className={styles.select_language}>
            <div className={styles.languages}>
                <Image src="/images/brasil.png" width={24} height={24} alt='Brasil'/>
                <Image src="/images/usa.png" width={24} height={24} alt='Brasil'/>
                <Image src="/images/spanish.png" width={24} height={24} alt='Brasil'/>
            </div>
        </div>
    </nav>
  )
}

export default MenuNavigation