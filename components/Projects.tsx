"use client";

import { initAnimationsAos } from "@/aos/aos";

import { useState, useEffect, useRef } from "react";

import ProjectSelected from "./ProjectSelected";

import styles from "../components/sass_components/Projects.module.css";

import { IProject, listProjects } from "@/app/projects/projects";


const Projects = () => {
  const [projects] = useState<IProject[]>(listProjects);
  const [project, setProject] = useState<IProject | null>(null);

  const project_element = useRef<any>([])

  
  const selectProject = (id: number): void => {
    const project = projects.find((project: IProject) => project.id === id);
    setProject(project || null);
  }
  
  useEffect(() => {
    initAnimationsAos()
  }, [])

  return (
    <div className={styles.projects} id="projects">
      <h4 className={styles.title_session_projects}>
        <span className={styles.number_session_projects}>1</span>Projetos
      </h4>

      {project ? (
        <ProjectSelected setProject={setProject} project={project}/>
      ) : (
        <div className={styles.container_projects}>
        {listProjects.map((project: IProject, index: number): any => (
           <div data-aos={project.animation_prop} id={project.id.toString()} onClick={() => selectProject(project.id)} style={{backgroundImage: `url(${project.bg_proj}`}} className={styles.project} key={index}>
              <h3 className={styles.project_title}>{project.name}</h3>
           </div>
        ))}
      </div>
      )}




    </div>
  );
};

export default Projects;
