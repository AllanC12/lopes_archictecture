
import ButtonBanner from "./buttons/ButtonBanner";
import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";


const Banner = () => {

  return (
    <div className={styles.banner}>
      <Slogan/>
    </div>
  );
};

export default Banner;
