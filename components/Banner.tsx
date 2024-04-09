import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";


const Banner = () => {

  return (
    <div id="home" className={styles.banner}>
      <Slogan/>
    </div>
  );
};

export default Banner;
