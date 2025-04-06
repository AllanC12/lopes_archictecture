"use client";

import React, { useRef, useState, useEffect } from "react";

import { IProject } from "@/app/projects/projects";

import styles from "../components/sass_components/ProjectSelected.module.scss";

import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";


import ButtonPrev from "./buttons/ButtonPrev";
import ButtonNext from "./buttons/ButtonNext";

import { MdClose } from "react-icons/md";

interface ProjectSelectedProps {
   project: IProject | null;
   setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}


const ProjectSelected: React.FC<ProjectSelectedProps> = ({setProject, project}) => {
  const FullScreenRef = useRef<any>(null);
  const ZoomRef = useRef<any>(null);
  const SlideShowRef = useRef<any>(null);

  const closeProject = (): void => {
    setProject(null)
  }

  return (
    <div className={styles.project_selected}>

      <div onClick={closeProject} className={styles.close_project}>
          <MdClose/>
      </div>

      <div className={styles.slide_project}>
        <Lightbox
          open={true}
          close={() => {}}
          slides={project?.images.map((image: string) => ({ src: image }))}
          plugins={[Fullscreen, Inline, Zoom, Slideshow]}
          fullscreen={{ ref: FullScreenRef }}
          styles={{ container: {  backgroundColor: "#f5f6f7" } }}
          zoom={{ ref: ZoomRef }}
          on={{
            click: () => {
              FullScreenRef.current?.enter()
              (SlideShowRef.current?.playing
                ? SlideShowRef.current?.pause
                : SlideShowRef.current?.play)?.();
            },
          }}
          inline={{
            style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },
          }}
          render={{
            iconPrev: () => <ButtonPrev />,
            iconNext: () => <ButtonNext />,

          }}
        />
      </div>
      <div className={styles.details_project}>
        <h3 className={styles.title_project}>{project?.name}</h3>
        <p className={styles.description_project}>{project?.description}</p>
        <div className={styles.details_project_bottom}>
          <div className={`${styles.details_project_location} ${styles.d_flex}`}>
            <h4>Localização: </h4>
            <span>{project?.location}</span>
          </div>
          {project?.data_size && (
            <div className={styles.details_project_data}>

             <div className={`${styles.details_project_terrain_area} ${styles.d_flex}`}>
                <h4>Área do terreno:</h4>
                <span>{project?.terrain_area}</span>
             </div>

             <div className={`${styles.details_project_build_area} ${styles.d_flex}`}>
                <h4>Área do construída:</h4>
                <span>{project?.build_area}</span>
             </div>

             <div className={`${styles.details_project_permeable_area} ${styles.d_flex}`}>
                <h4>Área permeável:</h4>
                <span>{project?.permeable_area}</span>
             </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelected;
