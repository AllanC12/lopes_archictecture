
import styles from '../components/sass_components/Contacts.module.css';

const Contacts = () => {
  return (
    <div id="contacts"className={styles.contacts}>
      <h2 className={styles.title_session_contacts}>
         <span className={styles.number_session_contacts}>3</span> Como nos achar
      </h2>
      <div className={`${styles.square_one} ${styles.square}`}></div>
      <div className={`${styles.square_two} ${styles.square}`}></div>

      <h2>
        Entre em contato
      </h2>
    </div>
  )
}

export default Contacts