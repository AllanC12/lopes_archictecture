'use client'

import { useEffect } from "react";

import { initAnimationsAos } from "@/aos/aos";

import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import Logo from "./Logo";

import styles from "../components/sass_components/Footer.module.css";

const Footer = () => {
  const urlWhatsApp: string = 'https://wa.me/+5537999817403';
  const urlEmail: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=lopesarchportfolio@gmail.com'

  useEffect(() => {
    initAnimationsAos()
  },[])

  return (
    <footer className={styles.footer}>
      <div id="contacts" className={styles.social_medias}>
        <Link data-aos="fade-right" target="_blank" href={urlWhatsApp} className={styles.whatsapp}>
          <FaWhatsapp />
        </Link>
        <Link data-aos="fade-left" target="_blank" href={urlEmail} className={styles.email}>
          <MdOutlineMailOutline />
        </Link>
      </div>
      <Link
        data-aos="flip-left"
        href="https://maps.app.goo.gl/Vf5k7q96WaJfhuuD9"
        target="_blank"
        className={styles.address}
      >
        Rua Américo Batista dos Santos Júnior - 102 - Centro - São Francisco de
        Paula MG
      </Link>
      {/* <div className={styles.logo}>
        <Logo sizeTitleOne={22} sizeTitleTwo={15} width={40} height={40} />
      </div> */}
    </footer>
  );
};

export default Footer;
