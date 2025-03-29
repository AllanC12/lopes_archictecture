import styles from "./sass_buttons/ButtonBanner.module.css";

import { Link } from "react-scroll";

type Props = {
  valueBtn: string;
};

const ButtonBanner = ({ valueBtn }: Props) => {
  return (

    <button data-aos="flip-left" className={styles.btn_about}>
        <Link to="about" spy={true} smooth={true} duration={600} className={styles.text}>{valueBtn}</Link>
    </button>
  );
};

export default ButtonBanner;
