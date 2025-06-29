
export interface IProject {
    id: number
    name: string;
    location: string;
    data_size: boolean;
    lat: string;
    terrain_area: string;
    build_area: string;
    permeable_area: string;
    software: string;
    linkForDrive: string;
    images: string[];
    bg_proj: string;
    description: string;
    animation_prop: string;
  }

export const listProjects: IProject[] = [
    { id: 1,
      name: "Casa Boa Vista",
      location: "São Francisco de Paula - Bairro Esplanada - MG - Brasil",
      data_size: true,
      lat: "-20.7",
      terrain_area: "221,5 m²",
      build_area: "130 m²",
      permeable_area: "29,5 m²",
      software: "AutoCAD e SketchUp",
      linkForDrive: "https://drive.google.com/drive/folders/1siw3Q5QHrdjMyKWcLjG4RrOsvCpTtotO?usp=drive_link ",
      images: [
          "/images/casa_boa_vista/1.jpg",
          "/images/casa_boa_vista/2.jpg",
          "/images/casa_boa_vista/3.jpg",
          "/images/casa_boa_vista/4.jpg",
          "/images/casa_boa_vista/5.jpg",
          "/images/casa_boa_vista/6.jpg",
          "/images/casa_boa_vista/7.jpg",
          "/images/casa_boa_vista/8.jpg",
          "/images/casa_boa_vista/9.jpg",
          "/images/casa_boa_vista/10.jpg",
          "/images/casa_boa_vista/11.jpg",
          "/images/casa_boa_vista/12.jpg",
          "/images/casa_boa_vista/13.jpg",
          "/images/casa_boa_vista/14.jpg",
          "/images/casa_boa_vista/15.jpg",
          "/images/casa_boa_vista/16.jpg",
      ],
      bg_proj: "/images/casa_boa_vista/11.jpg",
      description:"O projeto arquitetônico Casa Boa Vista está localizado em São Francisco de Paula, no bairro Explanada, em Minas Gerais. Este projeto tem como premissa a criação de um ambiente residencial que harmonize a funcionalidade e o conforto, respeitando as características naturais do terreno e promovendo um menor custo de execução.A área total do terreno é de 221,5 m², dos quais 130 m² são destinados à área construída, correspondendo a aproximadamente 58,7% do lote. A distribuição do espaço foi planejada para otimizar a circulação interna, mantendo a privacidade dos quartos, além de garantir a iluminação e ventilação naturais em todos os ambientes.A latitude de -20.7 indica uma localização em uma região de clima predominantemente tropical, com estações definidas, alta incidência solar e ventos predominantes do nordeste. Com base nessas condições climáticas, o projeto prioriza a utilização de materiais que ofereçam conforto térmico, além de soluções arquitetônicas como grandes aberturas e o uso de brises para minimizar a incidência direta do sol nos interiores.",
      animation_prop: "fade-right"
    },
    { id: 2,
      name: "Quartinho Ísis",
      location: "São Francisco de Paula - MG - Brasil",
      data_size: false,
      lat: "",
      terrain_area: "",
      build_area: "",
      permeable_area: "",
      software: "SketchUp e Enscape",
      linkForDrive: "",
      images: [
          "/images/quartinho_isis/1.png",
          "/images/quartinho_isis/2.png",
          "/images/quartinho_isis/3.png",
          "/images/quartinho_isis/4.png",

      ],
      bg_proj: "/images/quartinho_isis/2.png",
      description:"O projeto foi pensado em baixo custo, sem mudanças de estrutura no ambiente além do rebaixo de gesso inexistente no quarto original. Com sugestão de layout e mobiliário, o Quartinho Isis foi pensado em conforto e interação do bebê até idade infantil, por volta dos 7 ou 8 anos. Com berço que se transforma em cama e altura dos móveis acessível para esta faixa de idade, o quarto possibilita pleno desfruto por parte de sua nova residente.",
      animation_prop: "fade-left"
    },
    { id: 3,
      name: "Quarto BLUE/M - República",
      location: "Divinópolis - MG - Brasil",
      data_size: false,
      lat: "",
      terrain_area: "",
      build_area: "",
      permeable_area: "",
      software: "SketchUp e Enscape",
      linkForDrive: "",
      images: [
          "/images/republica/1.png",
          "/images/republica/2.png",
          "/images/republica/3.png",
          "/images/republica/4.png",
          "/images/republica/5.png",
          "/images/republica/6.png",
          "/images/republica/7.png",
          "/images/republica/8.png",
          "/images/republica/9.png",
          "/images/republica/10.jpg",
          "/images/republica/11.jpg",
          "/images/republica/12.jpg",
          "/images/republica/13.jpg",
          "/images/republica/14.png",
          "/images/republica/bg_proj.png",

      ],
      bg_proj: "/images/republica/bg_proj.png",
      description:"O projeto foi desenvolvido para acomodar estudantes do sexo masculino em um espaço compacto, mas eficiente. O ambiente integrado favorece a convivência, enquanto microespaços de estudo garantem foco e privacidade. Armários individuais contribuem para organizar o espaço e equilibrar interação e independência entre os usuários.",
      animation_prop: "fade-right"
    }
  ];