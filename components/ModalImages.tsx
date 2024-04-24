'use client'

import { SetStateAction, useRef } from "react";

import Image from "next/image"

import { IProject } from "@/app/projects/projects"

import styles from '../components/sass_components/Modal.module.scss';

import { IoMdClose } from "react-icons/io";

interface propModal {
    setShowModal: React.Dispatch<SetStateAction<boolean>>
    project: IProject | null
}

const ModalImages = ({setShowModal,project}:propModal) => {

  const refModal = useRef<HTMLDivElement>(null)

  const hideModal = () => {
    refModal.current?.style.setProperty('display','none')
  }
    
  return (
    <div ref={refModal} className={styles.modal}>
      <div className={styles.closeModal}>
        <IoMdClose onClick={() => setShowModal(false)}/>
      </div>

    </div>
  )
}

export default ModalImages