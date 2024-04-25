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
  const [amountProject, setAmountProject] = useState<number>(4);
  let animationBorder: Function;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectClicked, setProjectClicked] = useState<IProject | null>(null);

  const showDetailsProject = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const projectWraper = target.parentElement as HTMLDivElement;
    const projectItem = projectWraper.parentElement as HTMLDivElement;
    const arrowProject = projectItem.childNodes[0].childNodes[2] as SVGElement;
    const heightDefault: string = "55px";
    const fullHeight: string = "37vh";

    if (window.getComputedStyle(projectItem).height === heightDefault) {
      projectItem.style.setProperty("height", `${fullHeight}`);
      arrowProject.style.setProperty("rotate", "180deg");
    } else {
      projectItem.style.setProperty("height", `${heightDefault}`);
      arrowProject.style.setProperty("rotate", "0deg");
    }
  };

  useEffect(() => {
    refProject.current = refProject.current.slice(0, listProjects.length);
    initAnimationsAos();
  }, []);

  animationBorder = (indexElement: number, border: string) => {
    const borderElementAnimation = refProject.current[indexElement].childNodes[3] as HTMLDivElement;
    borderElementAnimation.style.setProperty("width", "0px");

    setTimeout(() => {
      if (border === "increase") {
        borderElementAnimation.style.setProperty("width", "100%");
      } else {
        borderElementAnimation.style.setProperty("width", "0px");
      }
    }, 10);
  };

  const getProjectClicked = (item: IProject): IProject[] => {
    return listProjects.filter((project) => project.id === item.id);
  };

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
                  <h2 className={styles.name_project}>{item.name}</h2>

                  <div
                    onClick={(e) => showDetailsProject(e)}
                    className={styles.arrow_project}
                    title="Abrir projeto"
                  ></div>
                  <MdOutlineKeyboardArrowDown className={styles.arrow} />
                </div>

                <p className={styles.description_project}>{item.description}</p>

                <span
                  onClick={() => {
                    setShowModal(true)
                    setProjectClicked(item);
                  }}
                  className={styles.view_image}
                >
                  Ver imagens
                </span>

                <Link href={item.linkForDrive}>
                  <FaDownload />
                  Baixar no drive
                </Link>

                <div className={styles.animation_border}></div>
              </div>
            );
          })}

          {showModal && <ModalImages setShowModal={setShowModal} project={projectClicked} />}

          <div
            onClick={() => setAmountProject(amountProject + 2)}
            className={styles.buttonAllProjects}
          >
            <ButtonAllProjects valueBtn="Ver Mais" />
          </div>
        </div>

        <div data-aos="fade-left" className={styles.slide_projects}>
          <Image
            src="/images/slide_1.jpg"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
          <Image
            src="/images/slide_2.jpeg"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
          <Image
            src="/images/slide_3.jpg"
            width={500}
            height={500}
            alt="Imagem de projeto"
          />
          <Image
            src="/images/slide_4.jpg"
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
