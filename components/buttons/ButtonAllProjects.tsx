import styles from "./sass_buttons/ButtonAllProjects.module.scss";

type Props = {
  valueBtn: string;
};

const ButtonContacts = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-right" className={styles.btn}>
      <p  className={styles.link_button}>
        {valueBtn}
     </p>
    </button>
  );
};

export default ButtonContacts;
