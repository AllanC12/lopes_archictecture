
import styles from "./sass_buttons/ButtonContacts.module.css";

import { Link } from "react-scroll";

type Props = {
  valueBtn: string;
};

const ButtonContacts = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-right" className={styles.btn_contacts}>
        <Link to="about" spy={true} smooth={true} duration={600} className={styles.text}>{valueBtn}</Link>
    </button>
  );
};

export default ButtonContacts;
