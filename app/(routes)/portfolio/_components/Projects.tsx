"use client";

import { useEffect, useState } from "react";
import { Popup } from "@/components/ui";
import PortfolioCard from "./Card";
import Image from "next/image";
import { Portfolio } from "../types/portfolio.type";

const Projects = () => {
  const portfolios: Array<Portfolio> = [
    {
      name: "Weather App",
      desc: "A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.",
      img: "/weather_app.avif",
      public_url: "https://weather-app-rishisoyal.vercel.app/",
      github: "https://github.com/rishisoyal/Weather-App",
      techStack: ["Javascript", "Svelte"],
    },
    {
      name: "Product Management System",
      desc: "A simple python TUI to manage and track customers and products",
      img: "/weather_app.avif",
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
              width={720}
              height={366}
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



export default Projects;
