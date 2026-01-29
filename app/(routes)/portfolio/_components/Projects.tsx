"use client";

import { useEffect, useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Popup } from "@/components/ui";
import Image from "next/image";

interface Portfolio {
  name?: string;
  desc?: string;
  img?: string;
  public_url?: string;
  github?: string;
  techStack?: Array<string>;
}

const Projects = () => {
  const portfolios: Array<Portfolio> = [
    {
      name: "Weather App",
      desc: "A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.",
      img: "/weather_app.webp",
      public_url: "https://weather-app-rishisoyal.vercel.app/",
      github: "https://github.com/rishisoyal/Weather-App",
      techStack: ["Javascript", "Svelte"],
    },
    {
      name: "Product Management System",
      desc: "A simple python TUI to manage and track customers and products",
      img: "/weather_app.webp",
      github: "https://github.com/rishisoyal/Product-Management-System",
      techStack: ["Python", "Pandas Library"],
    },
  ];

  const [previewMode, setPreviewMode] = useState(false);
  const [portfolioToPreview, setPortfolioToPreview] =
    useState<Portfolio | null>(null);

  function handlePortfolioClick(index: number) {
    const portfolio = portfolios[index];
    setPortfolioToPreview(portfolio);
    setPreviewMode(true);
  }

  useEffect(() => {
    document.body.style.overflow = previewMode ? "hidden" : "auto";
  }, [previewMode]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-284 place-items-center gap-8">
        {portfolios.map((portfolio, i) => (
          <div
            key={i}
            onClick={() => handlePortfolioClick(i)}
            className={`card relative rounded-2xl flex items-center justify-center w-full h-55 cursor-pointer overflow-hidden bg-cover transition-all duration-300 ease-in-out bg-center animate__animated animate__slideInLeft animate__delay-${i} border-2 border-[#45475a]`}
          >
            <Image
              className="w-full h-full bg-cover"
              src={portfolio.img!}
              alt={portfolio.name!}
              width={100}
              height={100}
            />
            <span className="w-full h-full absolute bg-[#000000] opacity-0 hover:opacity-50 transition-all duration-500 ease-in-out flex items-center justify-center"></span>
            <h2 className="text-3xl absolute text-center font-semibold text-[#5160b2] brightness-200 opacity-0 top-5 transition-all duration-500 pointer-events-none px-2">
              {portfolio.name}
            </h2>
          </div>
        ))}
      </div>
      <Popup
        isOpen={previewMode}
        onClose={() => {
          setPreviewMode(false);
        }}
      >
        {" "}
        <PortfolioCard portfolio={portfolioToPreview!} />
      </Popup>
    </div>
  );
};

function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <>
      <div className="w-full md:w-160 h-max">
        <div className="w-full flex items-center justify-center text-[150%] sm:text-4xl">
          <h2 className="text-[#5160b2]">{portfolio.name}</h2>
        </div>
        {/* Info section */}
        <div className="p-4 flex flex-col ga-4 text-sm sm:text-[1rem]">
          <div className="flex flex-wrap">
            <div className="flex items-center gap-2 p-2">
              <span className="p-2 bg-gray-400 dark:bg-gray-700 rounded-full">
                <IoCodeSlash />{" "}
              </span>
              <span className="text-nowrap">Tech Stack: </span>
              <strong className="text-[#5160b2] min-w-max dark:text-[#cdd6f4] flex flex-wrap">
                {portfolio.techStack?.join(", ")}
              </strong>
            </div>
            {portfolio.public_url && (
              <div className="flex items-center gap-2 p-2">
                <span className="p-2 bg-gray-400 dark:bg-gray-700 rounded-full">
                  <FaArrowUpRightFromSquare />
                </span>
                Preview:
                <a
                  href={portfolio.public_url}
                  target="_blank"
                  className=" text-[#5160b2] underline"
                >
                  <strong>Check out the app</strong>
                </a>
              </div>
            )}
            <div className="flex items-center gap-2 p-2">
              <span className="p-2 bg-gray-400 dark:bg-gray-700 rounded-full">
                <FaGithub />
              </span>
              GitHub:
              <a
                href={portfolio.github}
                target="_blank"
                className=" text-[#5160b2] underline"
              >
                <strong>View the code</strong>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 flex-col justify-start">
            <div className="flex gap-2 w-full">
              <span className="p-2 bg-gray-400 dark:bg-gray-700 rounded-full">
                <IoMdInformationCircleOutline />
              </span>
              About this project:
            </div>
            <p className="text-[#5160b2] text-left w-full dark:text-[#cdd6f4]">
              {portfolio.desc}
            </p>
          </div>
        </div>

        <div>
          <Image
            className="w-full rounded-2xl border border-[#45475a]"
            src={portfolio.img!}
            alt={portfolio.name!}
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
