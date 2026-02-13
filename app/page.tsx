"use client";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useCursor } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";

export default function Page() {
  const { customCursorOn } = useCursor();

  return (
    <>
      <title>Rishi Soyal - Home</title>

      <main className="width-transition overflow-hidden relative min-h-screen mb-14 lg:mb-0 flex items-center justify-center">
        <div className="bg-[#8caaee] dark:bg-[#1e1e2e] transition-colors duration-300 absolute h-[200%] w-full -rotate-15 -left-[73%] -top-1/2 -z-1 hidden lg:block animate__animated animate__slideInLeft"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="p-8 w-full flex gap-6 flex-col lg:flex-row items-center justify-around animate__animated animate__fadeInUp"
        >
          <div
            id="hero-img"
            className="relative w-60 h-60 sm:w-80 sm:h-80 lg:rounded-2xl lg:w-lg lg:h-162 lg:mt-4 rounded-[10px] lg:border-0"
          >
            <Image
              priority={true}
              src="/home_1.avif"
              alt="HERO IMAGE"
              className="object-cover rounded-[10px]"
              fill={true}
            />
          </div>
          <div className="width-transition flex flex-col items-center justify-center sm:w-200">
            <div className="flex items-center lg:items-start justify-center flex-col">
              <div className="flex gap-2 items-start justify-center">
                <div className="flex flex-col items-end p-4 pt-6">
                  <span className="flex gap-4 items-center flex-nowrap text-nowrap text-4xl sm:text-6xl font-semibold text-[#5160b2] before:hidden lg:before:block before:rounded-full before:w-12 before:h-1 before:bg-[#5160b2]">
                    I&apos;M RISHI SOYAL.
                  </span>
                  <span className="text-4xl sm:text-6xl font-semibold">
                    WEB DEVELOPER
                  </span>
                </div>
              </div>
              <div className="p-4 pt-0 md:w-180 lg:w-130 w-screen">
                <p className="text-wrap leading-8 text-center lg:text-left w-full lg:w-150 sm:text-[18px] text-[#232634] dark:text-[#cdd6f4] ">
                  I&apos;m an India based full-stack web developer focused on
                  crafting clean & user-friendly experiences, I am passionate
                  about building excellent software that improves the lives of
                  those around me.
                </p>
              </div>
              <div className="w-full px-4 flex items-center justify-center lg:justify-start">
                <Link
                  href="/about"
                  className={`w-max h-max ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
                >
                  <PrimaryButton
                    content="MORE ABOUT ME"
                    icon={<ImArrowRight2 size={25} />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8caaee] dark:bg-[#1e1e2e] transition-colors duration-300 absolute h-[200%] w-full -rotate-15 -right-[73%] -bottom-1/2 -z-1 hidden lg:block animate__animated animate__slideInRight"></div>
      </main>
    </>
  );
}
