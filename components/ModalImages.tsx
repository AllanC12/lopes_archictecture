"use client";

import { SetStateAction, useRef,useState, useEffect } from "react";

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
  
  const refBoxImage = useRef<HTMLDivElement[]>([])

  
  const listImages: string[] | undefined = project?.images
  const [indexMaxImage] = useState<number>(listImages!.length)
  const [indexCurrentImage,setIndexCurrentImage] = useState<number>(0)
  
  const showNextImage = () => {
    if(indexCurrentImage === indexMaxImage - 1){
      return
    }
    setIndexCurrentImage(indexCurrentImage + 1)
  }
  
  const showPreviousImage = () => {
    if(indexCurrentImage === 0){
      return
    }
    setIndexCurrentImage(indexCurrentImage - 1)
  }

  const applyBorder = (element: HTMLDivElement) => {
    const image = element.children[0] as HTMLElement
    image.style.setProperty("border",'4px solid #000')
  }
  
  useEffect(() => {
    refBoxImage.current = refBoxImage.current?.slice(0,listImages!.length)
    applyBorder(refBoxImage.current[indexCurrentImage])
  })

  return (
    
    <div className={styles.modal}>
      <div className={styles.closeModal}>
        <IoMdClose onClick={() => setShowModal(false)} />
      </div>

      <div className={styles.slides}>
        <div className={styles.main_slide}>
            <FaArrowLeft onClick={showPreviousImage} />
            <div className={styles.image_main_slide}>
              <Image src={listImages![indexCurrentImage]} width={500} height={360} alt="Imagem exibida" />
            </div>
            <FaArrowRight onClick={showNextImage}/>
        </div>

        <div className={styles.slide_secondary}>
            {listImages?.map((srcImage: string,index:number) => (
                <div 
                 key={index} 
                 className={styles.box_image}
                 ref={(element) => element && (refBoxImage.current[index] = element) }
                 >
                  <Image src={srcImage} width={100} height={100} alt="Imagem de projeto" />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
