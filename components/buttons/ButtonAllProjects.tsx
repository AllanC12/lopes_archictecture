
import styles from "./sass_buttons/ButtonAllProjects.module.scss";

import { Link } from "react-scroll";

type Props = {
  valueBtn: string;
};

const ButtonContacts = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-right" className={styles.btn}>
      <Link
        to="contacts"
        spy={true}
        smooth={true}
        duration={600}
        className={styles.link_button}
      >
        {valueBtn}
    </Link>
    </button>
  );
};

export default ButtonContacts;
