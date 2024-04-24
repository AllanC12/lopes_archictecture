export interface IProject {
    id: number
    name: string;
    linkForDrive: string;
    images: string[];
    description: string;
  }

export const listProjects: IProject[] = [
    { id: 1,
      name: "Elisian Heights Residence",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/elisian",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem,lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 2,
      name: "Quantum Urban Oasis",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/quantum",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 3,
      name: "Serenity Skyscape Tower",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/serenity",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 4,
      name: "Nexus Innovation Hub",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/Nexus",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 5,
      name: "Elisian Heights Residence",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/elisian",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fwp-content%2Fuploads%2Fsites%2F12%2F2024%2F01%2Farquitetura-singapura.jpg&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Flifestyle%2F10-projetos-de-design-e-arquitetura-que-prometem-moldar-o-mundo-em-2024%2F&docid=dN6rIbRbDZdnMM&tbnid=ebMeXiQtFFhWmM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA..i&w=1850&h=1152&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECHoQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 6,
      name: "Quantum Urban Oasis",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/quantum",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fentendaantes.com.br%2Fwp-content%2Fuploads%2F2019%2F10%2FPROJETO-50-8-scaled.jpg&imgrefurl=https%3A%2F%2Fentendaantes.com.br%2Ftipos-de-projetos%2F&docid=Os2IOyXm3ppIiM&tbnid=BeTum3DL1AJOtM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA..i&w=2560&h=1397&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECDYQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 7,
      name: "Serenity Skyscape Tower",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/serenity",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=https%3A%2F%2Fmparaizo.com.br%2Fsite%2Fimagem%2Fbannercelmparaizo.jpg&imgrefurl=https%3A%2F%2Fmparaizo.com.br%2F&docid=aI8yai38TTs7IM&tbnid=plPqMDCGsMvNLM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA..i&w=700&h=409&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGcQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
    { id: 8,
      name: "Nexus Innovation Hub",
      linkForDrive: "https://www.googledrive.com/lopesarchitecture/Nexus",
      images: [
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
        "https://www.google.com/imgres?q=arquitetura%20projetos&imgurl=http%3A%2F%2Fwww.penhamoraes.arq.br%2Fwp-content%2Fuploads%2F2020%2F03%2Fescrit%25C3%25B3rio-arquitetura-curitiba-penha-moraes-projeto-fachada.jpg&imgrefurl=https%3A%2F%2Fpenhamoraes.arq.br%2Fquais-as-etapas-de-um-projeto-arquitetonico%2F&docid=DommXbqLXkVNGM&tbnid=SHvmOLFxIxE9IM&vet=12ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwieud_OzLuFAxVajpUCHaVkAf0QM3oECGkQAA",
      ],
      description:
        "lorem ipsum dolor sit amet, consectetur adipis cillum dolore magna aliqu Lorem ipsum dolor sit amet, consectet  durit esse cillum dolore magna aliqu Lorem",
    },
  ];