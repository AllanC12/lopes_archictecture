
import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";
import FooterBanner from "./FooterBanner";


const Banner = () => {
  return (
    <div id="begin" className={styles.banner}>
      <Slogan/>
      <FooterBanner/>
    </div>
  );
};

export default Banner;
