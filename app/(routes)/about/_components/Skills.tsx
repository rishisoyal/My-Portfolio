"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "@/store";

const Skills = () => {
  const isDark = useTheme((s) => s.isDark);
  const skills = [
    {
      name: "HTML",
      level: 70,
    },
    {
      name: "JavaScript",
      level: 85,
    },
    {
      name: "CSS",
      level: 70,
    },
    {
      name: "ReactJS",
      level: 70,
    },
    {
      name: "Python",
      level: 60,
    },
    {
      name: "NextJS",
      level: 50,
    },
    {
      name: "TypeScript",
      level: 70,
    },
    {
      name: "NodeJS",
      level: 80,
    },
    {
      name: "TailwindCSS",
      level: 70,
    },
    {
      name: "ExpressJS",
      level: 80,
    },
    {
      name: "Git",
      level: 50,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-4/5 p-0 sm:p-2 gap-8 items-center place-content-center justify-items-center">
      {skills.map((skill) => (
        <div
          key={skill.name}
          data-aos="fade-up"
          // data-aos-delay={`${i * 500}`}
          className="w-full max-w-44 flex flex-col items-center justify-center"
        >
          <div className="w-full flex items-center justify-center">
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              className="text-center flex items-center justify-center"
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#5160b2`,
                textColor: `${isDark ? "#cdd6f4" : "#7287fd"}`,
                trailColor: `${isDark ? "#45475a" : "#99A1AF"}`,
                backgroundColor: "#ffffff",
              })}
            />
          </div>
          <div className="w-full flex items-center justify-center p-2 sm:p-4">
            <h2 className="text-xl">{skill.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
