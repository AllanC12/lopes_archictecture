import Link from "next/link";

import styles from "../buttons/sass_buttons/SocialMediaButtons.module.scss";

import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const SocialMediaButtons = () => {
  return (
    <>
      <div className={styles.card}>

        <Link
          className={`${styles.socialContainer} ${styles.containerTwo}  ${styles.container_icon}`}
          href="#"
        >
          <MdOutlineMailOutline/>
        </Link>


        <Link
          className={`${styles.socialContainer} ${styles.containerFour}  ${styles.container_icon}`}
          href="#"
        >
          <FaWhatsapp/>
        </Link>
      </div>
    </>
  );
};

export default SocialMediaButtons;
