import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import Image from "next/image";
import { Portfolio } from "../types/portfolio.type";

export default function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
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
            width={720}
            height={366}
          />
        </div>
      </div>
    </>
  );
}
