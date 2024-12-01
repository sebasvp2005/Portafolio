import { IconBrandGithub, IconWorld, IconEye } from "@tabler/icons";
import Image from "next/image";
import { useGalleryStore } from "../Stores/GalleryStore";

const projectsInfo = [
  {
    id: 1,
    name: "cpsp",
    proyecto_title: "CPSP Reserva de eventos",
    proyecto_description:
      "Desarrollo de una aplicación web y móvil full-stack diseñada para los miembros y el equipo administrativo, que facilita la gestión del proceso de reserva y compra de asientos en línea para eventos organizados por el CPSP. La aplicación móvil incluye una función de escaneo de códigos QR generados durante las compras, permitiendo verificar la asistencia de los usuarios al ingresar al evento.",
    proyecto_tecnologias: [
      "ReactJS",
      "TypeScript",
      "Python",
      "Azure Functions",
      "Azure SQL Database",
    ],
    proyecto_visualizations : [
      'cpsp/login.webp',
      'cpsp/preview.webp',
      'cpsp/area.webp',
      'cpsp/table.webp',
      'cpsp/assign.webp',
      'cpsp/error.webp',
    ]
  },
  {
    id: 2,
    name: "facial-recog",
    proyecto_title: "UPC Sistema Reconocimiento facial",
    proyecto_description:
      "Sistema de reconociminento facial para alumnos de UPC, que permite agilizar proceso de ingreso a la universidad y verificar la identidad de los alumnos. Se utilizó Facenet para el reconocimiento facial y Torch para el entrenamiento del modelo.",
    proyecto_url_github:
      "https://huggingface.co/spaces/u202210494/TF-procesamiento-imagenes/tree/main",
    proyecto_url_web: "https://huggingface.co/spaces/u202210494/TF-procesamiento-imagenes",
    proyecto_tecnologias: [
      "Python",
      "Torch",
      "Numpy",
      "Facenet",
    ],
  },
  {
    id: 3,
    proyecto_title: "CryptoCurrency App",
    name: "coinApp",
    proyecto_description:
      "Aplicación web que permite visualizar el precio de las criptomonedas en tiempo real, además de mostrar un análisis de la variación de precios en un periodo de tiempo. Se utilizó Streamlit para el desarrollo de la aplicación.",
    proyecto_url_github:
      "https://github.com/sebasvp2005/Cyptocurrency_app",
    proyecto_url_web: "https://cryptocurrencyapp.streamlit.app/",
    proyecto_tecnologias: ["Python", "Streamlit", "Pandas", "Numpy", "Matplotlib", "Web Scraping"],
  },
  {
    id: 4,
    proyecto_title: "KittyAI",
    name: "kittyAI",
    proyecto_description:
      "Bot con personalidad de gato mascota que interactúa con el usuario a través de mensajes de texto. El bot puede responder preguntas, contar chistes y realizar interacciones.",
    proyecto_url_github:
      "https://github.com/sebasvp2005/Cat_Bot",
    proyecto_url_web: "https://kittyai.netlify.app/",
    proyecto_tecnologias: ["ReactJS", "TypeScript", "NodeJS"],
  },
];

export const ProjectCard = () => {

  const setImages = useGalleryStore((state) => state.setImages);

  return (
    <section id="projects">
      {projectsInfo.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 border-[var(--bg-hover)]
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96"
        >
          <Image
            src={`/images/${project.name}/preview.webp`}
            alt={project.proyecto_title}
            className={`rounded-t md:w-3/5 w-auto object-cover md:absolute ${
              index % 2 === 0 ? "md:right-0" : "md:left-0"
            }  md:rounded`}
            priority
            width={1000}
            height={1000}
          />
          <div
            className={`flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${
              index % 2 === 0
                ? "md:items-start md:text-start"
                : "md:items-end md:text-end"
            } last:border-red-500`}
          >
            <h1
              className={`text-3xl font-bold text-start md:w-2/5 md:text-4xl ${
                index % 2 === 0 ? "md:text-start" : "md:text-end"
              } 
            `}
            >
              {project.proyecto_title}
            </h1>
            <p
              className={`p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)] 
             ${index % 2 === 0 ? "md:text-start" : "md:text-end"} 
            
            `}
            >
              {project.proyecto_description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `}
            >
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div
              className={`flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${
              index % 2 === 0
                ? "md:justify-start md:pr-5"
                : "md:justify-end md:pl-5"
            }
            `}
            >
              {
                project.proyecto_url_github &&
                <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <IconBrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </a>

              }

              {
                project.proyecto_url_web &&
                <a
                  href={project.proyecto_url_web}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="web"
                >
                  <IconWorld className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </a>
              }

              {
                project.proyecto_visualizations &&
                <button onClick={()=>{setImages(project.proyecto_visualizations)}}>
                    <IconEye className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </button>
              }

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;
