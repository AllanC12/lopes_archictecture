"use client";

import Link from "next/link";

import { SetStateAction, useRef,useState, useEffect } from "react";

import Image from "next/image";

import { IProject } from "@/app/projects/projects";

import styles from "../components/sass_components/Modal.module.scss";

import { IoMdClose } from "react-icons/io";
import {FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

interface propModal {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  project: IProject | null;
}

const ModalImages = ({ setShowModal, project }: propModal) => {
  
  const refPrevArrow = useRef<HTMLDivElement>(null)
  const refNextArrow = useRef<HTMLDivElement>(null)
  const refBiggerImage = useRef<HTMLImageElement>(null)
  const refSlideSecondary = useRef<HTMLDivElement>(null)
  const refBoxImage = useRef<HTMLImageElement[]>([])
  const listImages: string[] | undefined = project?.images
  const [indexMaxImage] = useState<number>(listImages!.length)
  const [counterImages,setCounterImages] = useState<number>(1)
  const [indexCurrentImage,setIndexCurrentImage] = useState<number>(0)
  const name = project?.name ? project.name : null
  console.log(project)
  
  const showNextImage = ():void => {
    if(indexCurrentImage === indexMaxImage - 1){
      return
    }
    setIndexCurrentImage(indexCurrentImage + 1)
    // applyBorderImageSelected()
  }
  
  const showPreviousImage = ():void => {
    if(indexCurrentImage === 0){
      return
    }
    setIndexCurrentImage(indexCurrentImage - 1)
    // applyBorderImageSelected()
  }

  // const resetBorderSelected = ():void => {
  //   refBoxImage.current.forEach((item: HTMLDivElement) => {
  //     item.style.setProperty('border','none')
  //   })  // }

  // const applyBorderImageSelected = () => {
  //   resetBorderSelected()
  //   refBoxImage.current[indexCurrentImage].style.setProperty('border','1px solid #000')

  // }

  // const validateSlideSecondary = () => {
  //   if(listImages!.length < 5){
  //     refSlideSecondary.current?.style.setProperty('justify-content','center')
  //   }
  // }

  const countPrevImages = ():void => {
    if(counterImages === 1) return
    showPreviousImage()
    setCounterImages(prevCounter => prevCounter - 1)
  }

  const countNextImages = ():void => {
    if(counterImages === indexMaxImage) return
    showNextImage()
    setCounterImages(prevCounter => prevCounter + 1)
  }
  
  useEffect(() => {
    refBoxImage.current = refBoxImage.current?.slice(0,listImages!.length)
    // applyBorderImageSelected()
    // validateSlideSecondary()
  })

  return (
    
    <div className={styles.modal}>
      <div className={styles.closeModal}>
        <IoMdClose onClick={() => setShowModal(false)} />
      </div>

      <div className={styles.slides}>
        <Link target="_blank" href={`${project?.linkForDrive}`} className={styles.title_project}>{name}</Link>
        <div className={styles.main_slide}>
           <div onClick={countPrevImages} className={styles.btn_prev}ref={refPrevArrow}>
            <AiOutlineLeft/>
           </div>
            <div className={styles.image_main_slide}>
              <Image ref={refBiggerImage} src={listImages![indexCurrentImage]} width={500} height={360} alt="Imagem exibida" />
            </div>
            <div onClick={countNextImages} className={styles.btn_next}ref={refNextArrow} >
              <AiOutlineRight />
            </div>
            <span className={styles.amountImages}>
              {counterImages}/{indexMaxImage}
            </span>
        </div>

        {/* <div ref={refSlideSecondary} className={styles.slide_secondary}>
            {listImages?.map((srcImage: string,index:number) => (
                <div key={index} className={styles.box_image}>
                  <Image ref={(element) => element && (refBoxImage.current[index] = element) }
                  src={srcImage} 
                  width={100}
                  height={100}
                  alt="Imagem de projeto" />
                </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default ModalImages;
