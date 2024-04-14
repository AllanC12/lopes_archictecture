'use client'

import Image from "next/image";

import styles from "../components/sass_components/Projects.module.css";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";


interface propProject {
  name: string;
  linkForDrive: string;
  images: string[];
}

const Projects = () => {
  const listprojects: propProject[] = [
    {
      name: "Elisian Heights Residence",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/elisian",
      images: ["https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA"
      ],
    },
    {
      name: "Quantum Urban Oasis",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/quantum",
      images: ["https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA"
      ],
    },
    {
      name: "Serenity Skyscape Tower",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/serenity",
      images: ["https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA"
      ],
    },
    {
      name: "Nexus Innovation Hub",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/Nexus",
      images: ["https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
         "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA"
      ],
    },
  ];

  return <div className={styles.projects}>
    <h4 className={styles.title_session_projects}><span className={styles.number_session_projects}>1</span>Projetos recentes</h4>
    
     <div className={styles.session_projects}>

        <div className={styles.list_projects}>
          {
            listprojects.map((item) => (
              <div key={item.name} className={styles.project}>
                <h2 className={styles.name_project}>
                  {item.name}
                </h2>
                <div className={styles.arrow_project}>
                  <MdOutlineKeyboardArrowDown className={styles.arrow} />
                </div>
              </div>
            ))
          }

        </div>

       <div className={styles.slide_projects}>
          <Image src="" width={100} height={100} alt="Imagem de projeto"/>
          <Image src="" width={100} height={100} alt="Imagem de projeto"/>
          <Image src="" width={100} height={100} alt="Imagem de projeto"/>
          <Image src="" width={100} height={100} alt="Imagem de projeto"/>
       </div>
    </div>
  </div>;
};

export default Projects;
