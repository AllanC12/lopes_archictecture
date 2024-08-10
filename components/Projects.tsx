"use client";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

import { initAnimationsAos } from "@/aos/aos";

import { MouseEvent, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ButtonAllProjects from "./buttons/ButtonAllProjects";
import ModalImages from "./ModalImages";

import styles from "../components/sass_components/Projects.module.css";

import { IProject, listProjects } from "@/app/projects/projects";

const Projects = () => {
  const refProject = useRef<HTMLDivElement[]>([]);
  const refContainerSlide = useRef<HTMLDivElement>(null);
  const [amountProject, setAmountProject] = useState<number>(4);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectClicked, setProjectClicked] = useState<IProject | null>(null);
  let animationBorder: Function;

  const showDetailsProject = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const projectWraper = target.parentElement as HTMLDivElement;
    const projectItem = projectWraper.parentElement as HTMLDivElement;
    const arrowProject = projectItem.childNodes[0].childNodes[2] as SVGElement;
    const heightDefault: string = "55px";
    const fullHeight: string = "109vh";

    if (window.getComputedStyle(projectItem).height === heightDefault) {
      projectItem.style.setProperty("height", `${fullHeight}`);
      arrowProject.style.setProperty("rotate", "180deg");
    } else {
      projectItem.style.setProperty("height", `${heightDefault}`);
      arrowProject.style.setProperty("rotate", "0deg");
    }
  };

  animationBorder = (indexElement: number, border: string) => {
    const borderElementAnimation = refProject.current[indexElement]
      .childNodes[4] as HTMLDivElement;
    borderElementAnimation.style.setProperty("width", "0px");

    setTimeout(() => {
      if (border === "increase") {
        borderElementAnimation.style.setProperty("width", "100%");
      } else {
        borderElementAnimation.style.setProperty("width", "0px");
      }
    }, 100);
  };

  const defineOpacityImage = (action: string, element: Element) => {
    if (element instanceof HTMLElement) {
      if (action === "remove") {
        element.style.setProperty("opacity", "0");
      } else if (action === "add") {
        element.style.setProperty("opacity", "1");
      }
    }
  };

  const alternateBetweenImages = () => {
    const imageList = refContainerSlide.current?.children as HTMLCollection;
    let index: number = 0;
    let indexMax: number = imageList!.length - 1;

    imageList![index].classList.add("selected");
    defineOpacityImage("add", imageList![index]);

    setInterval(() => {
      imageList![index].classList.remove("selected");
      defineOpacityImage("remove", imageList![index]);
      index++;
      if (index > indexMax) index = 0;
      imageList![index].classList.add("selected");
      defineOpacityImage("add", imageList![index]);
    }, 3000);
  };

  useEffect(() => {
    refProject.current = refProject.current.slice(0, listProjects.length);
    initAnimationsAos();
    alternateBetweenImages();
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <h4 className={styles.title_session_projects}>
        <span className={styles.number_session_projects}>1</span>Projetos
        recentes
      </h4>

      <div className={styles.session_projects}>
        <div className={styles.list_projects}>
          {listProjects.slice(0, amountProject).map((item, index) => {
            return (
              <div
                onMouseLeave={() => {
                  animationBorder(index, "decrease");
                }}
                onMouseEnter={() => {
                  animationBorder(index, "increase");
                }}
                ref={(element) =>
                  element && (refProject.current[index] = element)
                }
                key={item.id}
                className={styles.project}
                data-aos="fade-right"
              >
                <div className={styles.wraper_project}>
                  <h2
                    onClick={showDetailsProject}
                    className={styles.name_project}
                  >
                    {item.name}
                  </h2>

                  <div
                    onClick={(e) => showDetailsProject(e)}
                    className={styles.arrow_project}
                    title="Abrir projeto"
                  ></div>
                  <MdOutlineKeyboardArrowDown className={styles.arrow} />
                </div>
                <div className={styles.headline}>
                  <div className={styles.item_headline}>
                    <span><b>Localização:</b> {item.location}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <span><b>Latitude:</b> {item.lat}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <span><b>Área do Terreno:</b> {item.terrain_area}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <span><b>Área Construída:</b> {item.build_area}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <span><b>Área permeável:</b> {item.permeable_area}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <span><b>Software:</b> {item.software}</span>
                  </div>
                  <div className={styles.item_headline}>
                    <p className={styles.description_project}>
                      <b>Descrição: </b>
                      {item.description}
                    </p>
                  </div>
                </div>

                <span
                  onClick={() => {
                    setShowModal(true);
                    setProjectClicked(item);
                  }}
                  className={styles.view_image}
                >
                  Ver imagens
                </span>

                <Link href={item.linkForDrive} target="_blank">
                  <FaDownload />
                  Baixar no drive
                </Link>

                <div className={styles.animation_border}></div>
              </div>
            );
          })}

          {showModal && (
            <ModalImages setShowModal={setShowModal} project={projectClicked} />
          )}

          <div
            onClick={() => setAmountProject(amountProject + 2)}
            className={styles.buttonAllProjects}
          >
            {/* <ButtonAllProjects valueBtn="Ver Mais" /> */}
          </div>
        </div>

        <div
          ref={refContainerSlide}
          data-aos="fade-left"
          className={styles.slide_projects}
        >
          <Image
            className={styles.selected}
            src="https://drive.google.com/uc?export=view&id=1abNiPIwTd6IIUilszRTNH8Isrrx7ZY4l"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
          <Image
            src="https://drive.google.com/uc?export=view&id=1YOLkJH2d3WGmqNlcXhOSQC_8m_myLuTZ"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
          <Image
            src="https://drive.google.com/uc?export=view&id=1I_ozzGbvd_2nVNh-zKsKhZQwEaItFy46"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
