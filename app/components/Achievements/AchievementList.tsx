import { ReactElement } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const achivements = [
    {
        name : "IEEEXtreme 17.0 Programming Competition",
        date : "Octubre 2023",
        description : "Representé a mi univesidad bajo el equipo “Monaschinas”.",
        resultado: "9 en Peru, 23 en la region , 273 global." 
    },
    {
        name : "The 2023 ICPC South America/Brazil Finals",
        date : "Octubre 2023",
        description: "Representé a mi universidad bajo el equipo “Re:Monaschinas”.",
        resultado: "6 en Peru, 75 a nivel Latinoamerica."
    },
    {
        name: "ULatinHack Cybersecurity Contest",
        date: "Junio 2023",
        description: "Representé a mi universidad bajo el equipo “Willy Danos Lab”.",
        resultado: "primer puesto a nivel nacional, 3 a nivel Latinoamerica."
    },
    {
        name: "The 2022 ICPC South America/Brazil Finals",
        date: "Marzo 2023",
        description: "Representé a mi universidad bajo el equipo “C0d3Br0th3rs”.",
        resultado: "12 en el pais, 43 en la region, 534 global."
    },
    {
        name: "UPCXtreme 2022 edition",
        date: "Octubre 2022",
        description: "Participé bajo el equipo “C0d3Br0th3rs”.",
        resultado: "primer puesto en toda nuestra universidad."
    }

]

export const AchievementList = (): ReactElement => {
  return (
    <VerticalTimeline layout = "1-column-left" >
        {
            achivements.map((achievement, index) => (
                <VerticalTimelineElement
                key={index}
                iconStyle={{
                    background: "var(--bg-buttons)",
                    color: "#fff",
                    border: "none"
                }}
                contentStyle={{
                    background: "transparent",
                    color: "var(--foreground)",
                    boxShadow: "unset"
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  var(--socials-buttons)",
                }}

                style = {{"margin": 0}}
                
                >
                    <div className="flex flex-col">
                        <span>{achievement.date}</span>
                        <div className="flex max-md:flex-col">
                            <h1 className="font-bold text-lg w-[30%] max-md:w-full">{achievement.name}</h1>
                            <div>
                                <p>{achievement.description}</p>
                                <p> <span className="font-bold text-lg">Puesto:</span> {achievement.resultado}</p>
                            </div>
                        </div>

                    </div>





                </VerticalTimelineElement>
            ))
        }

    </VerticalTimeline>
  );
};