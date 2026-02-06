"use client";

import { useEffect, useState } from "react";
import { Popup } from "@/components/ui";
import PortfolioCard from "./Card";
import Image from "next/image";
import { Portfolio } from "../types/portfolio.type";
import { useCursor } from "@/store";

const Projects = () => {
  const { customCursorOn } = useCursor();
  const portfolios: Array<Portfolio> = [
    {
      name: "Code Reviewer(AI Agent)",
      desc: "Implemented an autonomous self-correcting agent using LLM tool-calling and Zod-validated feedback units. The agent reviews and improves code snippets based on user requirements, leveraging Mistral AI models and Vercel's AI SDK for seamless integration.",
      img: "/code-reviewer.avif",
      public_url: "https://code-reviewer-theta-one.vercel.app/",
      github: "https://github.com/rishisoyal/Code-Reviewer",
      techStack: ["NextJS", "Vercel AI SDK", "Zod", "Typescript", "Mistral AI"],
    },
    {
      name: "Weather App",
      desc: "A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.",
      img: "/weather_app.avif",
      public_url: "https://weather-app-rishisoyal.vercel.app/",
      github: "https://github.com/rishisoyal/Weather-App",
      techStack: ["Javascript", "Svelte"],
    },
    {
      name: "My Portfolio Website",
      desc: "A personal portfolio website to showcase my projects, skills, and experience. Built with Next.js and Tailwind CSS, featuring dark mode and custom cursor.",
      img: "/portfolio.avif",
      public_url: "https://rishisoyal.vercel.app/",
      github: "https://github.com/rishisoyal/My-Portfolio",
      techStack: [
        "NextJS",
        "Tailwind CSS",
        "Typescript",
        "Vercel",
        "Zod",
        "Resend",
      ],
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
            className={`card relative rounded-2xl flex items-center justify-center w-full h-55 ${customCursorOn ? "cursor-none" : "cursor-pointer"} overflow-hidden bg-cover transition-all duration-300 ease-in-out bg-center animate__animated animate__slideInLeft animate__delay-${i} border-2 border-[#45475a]`}
          >
            <Image
              className="w-full h-full bg-cover"
              src={portfolio.img!}
              alt={portfolio.name!}
              width={720}
              height={366}
            />
            <span className="flex w-full h-full absolute bg-[#000000] opacity-10 sm:opacity-0 sm:hover:opacity-50 transition-all duration-500 ease-in-out items-center justify-center"></span>
            <h2 className="text-2xl absolute text-center font-semibold text-[#5160b2] brightness-200 sm:opacity-0 sm:top-5 transition-all duration-500 pointer-events-none px-2 text-shadow-[0px_0px_30px_#5160b2]">
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
