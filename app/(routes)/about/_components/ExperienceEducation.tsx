"use client";

import { LuBriefcaseBusiness } from "react-icons/lu";
import { useTheme } from "@/store";

const ExperienceEducation = () => {
  const isDark = useTheme((s) => s.isDark);
  const experienceEducation = [
    {
      duration: "2006 - 2022",
      title: "SCHOOLING",
      description: "Kendriya Vidyalaya No.3",
    },
    {
      duration: "2022 - 2025",
      title: "BACHELOR OF COMPUTER APPLICATION",
      description: "University Maharaja College",
    },
    {
      duration: "2025 - 2027(expected)",
      title: "MASTER OF COMPUTER APPLICATION",
      description: "Compucom Institute Of Technology And Management",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-3 sm:p-8 w-full lg:w-300 place-items-center">
        {experienceEducation.map((data, i) => (
          <div
            key={i}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            className="flex gap-4 p-4 w-full "
          >
            <div className="flex flex-col items-center justify-center">
              <span className="p-2 bg-[#5160b2] rounded-full">
                {" "}
                <LuBriefcaseBusiness
                  size={30}
                  color={isDark ? "black" : "white"}
                />
              </span>
              <span className="w-1 h-full bg-gray-500"></span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-400 dark:bg-gray-700 w-fit px-2 rounded-full dark:text-gray-200 text-sm">
                {data.duration}
              </div>
              <h2 className="text-xl">{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;
