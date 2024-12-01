import {  IconSchool, IconBriefcase } from "@tabler/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Peruana de Ciencias Aplicadas",
    text: "Licenciatura en Ciencias de la Computacion",
    date: "Marzo 2022 - Actualidad",
  },

];

const workHistory = [
  {
    id: 1,
    title: "Universidad Privada de Ciencias Aplicadas",
    text: "Tutor de Programación",
    date: "Marzo 2024 - Actualidad",
    description: "Voluntariado",
  },
  {
    id: 2,
    title: "Colegio de Psicologos del Peru",
    text: "Fullstack Developer",
    date: "Marzo 2024 - Mayo 2024",
    description: "",
  },
];

export const TimeLine = ({ showEducation }) => {
  return (
    <VerticalTimeline>
      {(showEducation ? educationHistory : workHistory).map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          iconStyle={{
            background: "var(--bg-buttons)",
            color: "#fff",
            border: "none"
           }}
          icon={showEducation ? <IconSchool /> : <IconBriefcase />}
          contentStyle={{
            background: "transparent",
            color: "var(--foreground)",
            border: "1px solid var(--socials-buttons)",
            boxShadow: "unset"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  var(--socials-buttons)",
          }}
           
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.text}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
