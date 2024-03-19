import styles from '../sass_components/buttonStyles/ButtonProjects.module.css'

type Props = {
  valueBtn: string
}

const ButtonProjects = ({valueBtn}:Props) => {
  return (
    <button className={styles.button_project}>
      <a href="#" className={styles.link_button}><span className={styles.span_button}>{valueBtn}</span></a> 
    </button>
  )
}

export default ButtonProjects