
import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";
import FooterBanner from "./FooterBanner";

import Image from "next/image";
import ImageBanner from '../public/images/project_1/img_r4.jpg';

const Banner = () => {
  return (
    <div id="init" className={styles.banner}>
      <Image src={ImageBanner} alt="Imagem principal" layout="fill"/> 
      <Slogan/>
      <FooterBanner/>
    </div>
  );
};

export default Banner;
