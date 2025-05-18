'use client'

import { useEffect } from "react";

import { initAnimationsAos } from "@/aos/aos";

import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

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
        href="https://maps.app.goo.gl/Uc4pA2k7ZyG94Nwh6"
        target="_blank"
        className={styles.address}
      >
        São Francisco de Paula - MG - Brasil
      </Link>
      <p className={styles.developer}>
        <span> Developed By </span>
         <Link href="https://github.com/AllanC12" target="_blank" className={styles.developer}>
            Allan C.
         </Link>
      </p>
    </footer>
  );
};

export default Footer;
