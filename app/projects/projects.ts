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
        "https://drive.google.com/uc?export=view&id=1abNiPIwTd6IIUilszRTNH8Isrrx7ZY4l",
        "https://drive.google.com/uc?export=view&id=1YOLkJH2d3WGmqNlcXhOSQC_8m_myLuTZ",
        "https://drive.google.com/uc?export=view&id=1I_ozzGbvd_2nVNh-zKsKhZQwEaItFy46",
        "https://drive.google.com/uc?export=view&id=1rg7wgbcFAN3m7KKMxSE0IOetjdRZwshz",
        "https://drive.google.com/uc?export=view&id=16ovB6pt5s_Qb1e8O6bLIKwYmuwwXhlS1",
        "https://drive.google.com/uc?export=view&id=1HtPdOlDG4cU-fEMKMmCTFMTi8WdQ2Hcd",
        "https://drive.google.com/uc?export=view&id=1VqmAkqTGRuWDCX5eZ-7SgRa1JnGMnCI3",
        "https://drive.google.com/uc?export=view&id=1pLrX1-vOAeHh4U0hSqhMUx66NSNhlqmd",
        "https://drive.google.com/uc?export=view&id=1Em67Disuky6iqZ3Yprr3hdipwiTF_ph5",
        "https://drive.google.com/uc?export=view&id=1YOLkJH2d3WGmqNlcXhOSQC_8m_myLuTZ",
        "https://drive.google.com/uc?export=view&id=1bElX6naLbRbKRYU9g5XeUsIe5gZHxoZh",
        "https://drive.google.com/uc?export=view&id=1dORPuoyTSEBaoe4h5YrxUg7sC90CobJp",
        "https://drive.google.com/uc?export=view&id=17998ShQ15LqeGicCeiXwrwfYK5qlyBj8",
        "https://drive.google.com/uc?export=view&id=1D6dLybA8npmUHUUNaMz8scGz2GjAauNW",
        "https://drive.google.com/uc?export=view&id=1hiMUvEbw6fcOFl0CajFc09KXhrfjab7U"
      ],
      description:"O projeto arquitetônico Casa Boa Vista está localizado em São Francisco de Paula, no bairro Explanada, em Minas Gerais. Este projeto tem como premissa a criação de um ambiente residencial que harmonize a funcionalidade e o conforto, respeitando as características naturais do terreno e promovendo um menor custo de execução.A área total do terreno é de 221,5 m², dos quais 130 m² são destinados à área construída, correspondendo a aproximadamente 58,7% do lote. A distribuição do espaço foi planejada para otimizar a circulação interna, mantendo a privacidade dos quartos, além de garantir a iluminação e ventilação naturais em todos os ambientes.A latitude de -20.7 indica uma localização em uma região de clima predominantemente tropical, com estações definidas, alta incidência solar e ventos predominantes do nordeste. Com base nessas condições climáticas, o projeto prioriza a utilização de materiais que ofereçam conforto térmico, além de soluções arquitetônicas como grandes aberturas e o uso de brises para minimizar a incidência direta do sol nos interiores."
    }
  ];