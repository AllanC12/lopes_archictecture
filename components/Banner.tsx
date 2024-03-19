import Image from "next/image";

import ButtonBanner from "./buttons/ButtonBanner";

import styles from "../components/sass_components/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h3>
        <span>Arquitetura que ecoa a história,</span>
        <br />
        <span>celebra o presente</span>
        <br />
        <span>e vislumbra o futuro.</span>
      </h3>
    </div>
  );
};

export default Banner;
