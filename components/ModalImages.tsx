"use client";

import { MouseEvent, MutableRefObject } from "react";

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
  
  const [sourceBiggerImage,setSourceBiggerImage] = useState<string>('')
  const refBiggerImage = useRef<HTMLImageElement>(null)
  const refBoxImage = useRef<HTMLDivElement[]>([])
  const listImages: string[] | undefined = project?.images
  const [indexMaxImage] = useState<number>(listImages!.length)
  const [indexCurrentImage,setIndexCurrentImage] = useState<number>(0)
  
  const showNextImage = ():void => {
    if(indexCurrentImage === indexMaxImage - 1){
      return
    }
    setIndexCurrentImage(indexCurrentImage + 1)
  }
  
  const showPreviousImage = ():void => {
    if(indexCurrentImage === 0){
      return
    }
    setIndexCurrentImage(indexCurrentImage - 1)
  }

  const resetBorderSelected = ():void => {
    refBoxImage.current.forEach((item: HTMLDivElement) => {
      item.style.setProperty('border','none')
    })
  }

  const applyBorderImageSelected = (target: HTMLDivElement | null = null) => {
    resetBorderSelected()
    refBoxImage.current[indexCurrentImage].style.setProperty('border','1px solid #000')

    if(target){
      resetBorderSelected()
      target.style.setProperty('border','1px solid #000')
    }
  }

  const showImageSelected = (image: Element) => {
    const biggerImage: HTMLImageElement | null = refBiggerImage.current
    const htmlImageElement = image as HTMLImageElement
    setSourceBiggerImage(htmlImageElement.src)
    biggerImage?.setAttribute('srcset', sourceBiggerImage)
  }

  const selectImageInSlide = () => {
    refBoxImage.current.forEach((item: HTMLDivElement,index: number) => {
      item.children[0].addEventListener('click',() => {
        applyBorderImageSelected(item)
        showImageSelected(item.children[0])
      })
    })
  }
  
  useEffect(() => {
    refBoxImage.current = refBoxImage.current?.slice(0,listImages!.length)
    applyBorderImageSelected()
    selectImageInSlide()
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
              <Image ref={refBiggerImage} src={listImages![indexCurrentImage]} width={500} height={360} alt="Imagem exibida" />
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
