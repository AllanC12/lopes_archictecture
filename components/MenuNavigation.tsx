import Link from 'next/link'
import Image from 'next/image'

import styles from '../components/sass_components/MenuNavigation.module.css'

const MenuNavigation = () => {
  return (
    <nav className={styles.menu_navigation}>
        <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="projects">Projetos</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/contacts">Contatos</Link></li>
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