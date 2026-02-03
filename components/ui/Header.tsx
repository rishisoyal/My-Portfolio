"use client";

import Link from "next/link";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import "../../styles/header.css";
import { useTheme } from "@/store/themeStore";
import { usePathname } from "next/navigation";

export default function Header() {
  const isDark = useTheme((s) => s.isDark);
  const pathname = usePathname();

  const pages = [
    {
      path: "/",
      name: "Home",
      icon: (
        <FaHome
          size={22}
          className="relative z-10"
          color={isDark ? "white" : "black"}
        />
      ),
    },
    {
      path: "/about",
      name: "About",
      icon: (
        <FaCircleUser
          size={22}
          className="relative z-10"
          color={isDark ? "white" : "black"}
        />
      ),
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      icon: (
        <FaBriefcase
          size={22}
          className="relative z-10"
          color={isDark ? "white" : "black"}
        />
      ),
    },
    {
      path: "/contact",
      name: "Contact",
      icon: (
        <IoMailOpen
          size={22}
          className="relative z-10"
          color={isDark ? "white" : "black"}
        />
      ),
    },
  ] as const;

  return (
    <>
      <header className="lg:h-full bottom-0 fixed w-full lg:w-max p-4 pl-0 lg:my-2 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none z-40 right-0 block lg:flex">
        <ul className="flex flex-row lg:flex-col items-center justify-evenly lg:justify-center w-full lg:gap-6">
          {pages.map((page, i) => (
            <li key={i} className="flex place-content-center relative">
              <Link
                href={page.path}
                className={`w-13 h-13 flex p-3 gap-4 rounded-full items-center justify-center relative
    ${
      pathname === page.path
        ? "bg-[#7287fd] dark:bg-[#5160b2]"
        : "bg-[#eff1f5] dark:bg-[#45475A]"
    }
  `}
              >
                <h2 className="absolute font-semibold opacity-0 right-[20%] bg-[#7287fd] dark:bg-[#5160b2] w-30 h-full hidden lg:flex items-center justify-center rounded-l-full rounded-r-2xl -z-9 pointer-events-none">
                  {page.name}
                </h2>
                {page.icon}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

