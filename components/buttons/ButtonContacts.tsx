
import styles from "./sass_buttons/ButtonContacts.module.css";

import { Link } from "react-scroll";

type Props = {
  valueBtn: string;
};

const ButtonContacts = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-right" className={styles.button_contact}>
      <Link
        to="contacts"
        spy={true}
        smooth={true}
        duration={600}
        className={styles.link_button}
      >
        <span className={styles.span_button}>{valueBtn}</span>
      </Link>
    </button>
  );
};

export default ButtonContacts;
