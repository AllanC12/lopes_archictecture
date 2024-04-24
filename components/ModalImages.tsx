"use client";

import { SetStateAction, useRef } from "react";

import Image from "next/image";

import { IProject } from "@/app/projects/projects";

import styles from "../components/sass_components/Modal.module.scss";

import { IoMdClose } from "react-icons/io";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

interface propModal {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  project: IProject | null;
}

const ModalImages = ({ setShowModal, project }: propModal) => {

  const listImages: string[] | undefined = project?.images

  return (
    <div className={styles.modal}>
      <div className={styles.closeModal}>
        <IoMdClose onClick={() => setShowModal(false)} />
      </div>

      <div className={styles.slides}>
        <div className={styles.main_slide}>
            <FaArrowLeft/>
            <div className={styles.image_main_slide}></div>
            <FaArrowRight/>
        </div>

        <div className={styles.slide_secondary}>
            {listImages?.map((srcImage: string) => (
                <Image src={srcImage} width={100} height={100} alt="Imagem de projeto" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
