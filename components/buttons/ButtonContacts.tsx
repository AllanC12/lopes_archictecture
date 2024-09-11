
import styles from "./sass_buttons/ButtonContacts.module.css";

import { Link } from "react-scroll";

type Props = {
  valueBtn: string;
};

const ButtonContacts = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-right" className={styles.button}>
      <span className={styles.text_container}>
        <Link to="contacts" spy={true} smooth={true} duration={600} className={styles.text}>{valueBtn}</Link>
      </span>
    </button>
  );
};

export default ButtonContacts;
