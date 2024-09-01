
export interface IProject {
    id: number
    name: string;
    location: string;
    lat: string;
    terrain_area: string;
    build_area: string;
    permeable_area: string;
    software: string;
    linkForDrive: string;
    images: string[];
    description: string;
  }

export const listProjects: IProject[] = [
    { id: 1,
      name: "Casa Boa Vista",
      location: "São Francisco de Paula - Bairro Explanada - MG - Brasil",
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
      description:"O projeto arquitetônico Casa Boa Vista está localizado em São Francisco de Paula, no bairro Explanada, em Minas Gerais. Este projeto tem como premissa a criação de um ambiente residencial que harmonize a funcionalidade e o conforto, respeitando as características naturais do terreno e promovendo um menor custo de execução.A área total do terreno é de 221,5 m², dos quais 130 m² são destinados à área construída, correspondendo a aproximadamente 58,7% do lote. A distribuição do espaço foi planejada para otimizar a circulação interna, mantendo a privacidade dos quartos, além de garantir a iluminação e ventilação naturais em todos os ambientes.A latitude de -20.7 indica uma localização em uma região de clima predominantemente tropical, com estações definidas, alta incidência solar e ventos predominantes do nordeste. Com base nessas condições climáticas, o projeto prioriza a utilização de materiais que ofereçam conforto térmico, além de soluções arquitetônicas como grandes aberturas e o uso de brises para minimizar a incidência direta do sol nos interiores."
    }
  ];