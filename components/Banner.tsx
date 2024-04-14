'use client'

import { useEffect, useRef,useState } from "react";

import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";
import FooterBanner from "./FooterBanner";

import { ContextDataBanner } from "@/app/context/BannerContext";

const Banner = () => {
  const refBanner:React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const {setBannerHeight} = ContextDataBanner()


  return (
    <div id="begin" ref={refBanner} className={styles.banner}>
      <Slogan/>
      <FooterBanner/>
    </div>
  );
};

export default Banner;
