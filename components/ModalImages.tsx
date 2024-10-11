"use client";

import Link from "next/link";

import { SetStateAction, useRef, useState, useEffect } from "react";

import Image from "next/image";

import Zoom from "react-medium-image-zoom";

import { IProject } from "@/app/projects/projects";

import styles from "../components/sass_components/Modal.module.scss";

import { IoMdClose } from "react-icons/io";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface propModal {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  project: IProject | null;
}

const ModalImages = ({ setShowModal, project }: propModal) => {
  const refHeaderBlur = useRef<HTMLDivElement>(null);
  const refFooterBlur = useRef<HTMLDivElement>(null);
  const refPrevArrow = useRef<HTMLDivElement>(null);
  const refNextArrow = useRef<HTMLDivElement>(null);
  const refBiggerImage = useRef<HTMLImageElement>(null);
  const refBoxImage = useRef<HTMLImageElement[]>([]);
  const listImages: string[] | undefined = project?.images;
  const [indexMaxImage] = useState<number>(listImages!.length);
  const [counterImages, setCounterImages] = useState<number>(1);
  const [indexCurrentImage, setIndexCurrentImage] = useState<number>(0);
  const name = project?.name ? project.name : null;

  const showNextImage = (): void => {
    if (indexCurrentImage === indexMaxImage - 1) {
      return;
    }
    setIndexCurrentImage(indexCurrentImage + 1);
  };

  const showPreviousImage = (): void => {
    if (indexCurrentImage === 0) {
      return;
    }
    setIndexCurrentImage(indexCurrentImage - 1);
  };

  const countPrevImages = (): void => {
    if (counterImages === 1) return;
    showPreviousImage();
    setCounterImages((prevCounter) => prevCounter - 1);
  };

  const countNextImages = (): void => {
    if (counterImages === indexMaxImage) return;
    showNextImage();
    setCounterImages((prevCounter) => prevCounter + 1);
  };

  const effectFocus = (opacity: string): void => {
    const headerBlur = refHeaderBlur.current;
    const footerBlur = refFooterBlur.current;

    headerBlur?.style.setProperty("opacity", opacity);
    footerBlur?.style.setProperty("opacity", opacity);
  };

  useEffect(() => {
    refBoxImage.current = refBoxImage.current?.slice(0, listImages!.length);
  });

  return (
    <div className={`${styles.overlayVisibleWrapper} ${styles.modal}`}>
      <div className={styles.closeModal}>
        <IoMdClose onClick={() => setShowModal(false)} />
      </div>

      <div className={styles.slides}>
        <div className={styles.main_slide}>
          <div
            onClick={countPrevImages}
            className={styles.btn_prev}
            ref={refPrevArrow}
          >
            <AiOutlineLeft />
          </div>
          <div className={styles.image_main_slide}>
            <div
              onMouseOver={() => effectFocus("1")}
              onMouseOut={() => effectFocus("0")}
              ref={refHeaderBlur}
              className={styles.header_blur}
            >
              <Link
                target="_blank"
                href={`${project?.linkForDrive}`}
                className={styles.title_project}
              >
                {name}
              </Link>
            </div>
            <Zoom>
              <Image
                onMouseOver={() => effectFocus("1")}
                onMouseOut={() => effectFocus("0")}
                ref={refBiggerImage}
                src={listImages![indexCurrentImage]}
                width={890}
                height={490}
                alt="Imagem exibida"
              />
            </Zoom>


            <div ref={refFooterBlur} className={styles.footer_blur}>
              <span className={styles.amountImages}>
                {counterImages}/{indexMaxImage}
              </span>
            </div>
          </div>
          <div
            onClick={countNextImages}
            className={styles.btn_next}
            ref={refNextArrow}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
