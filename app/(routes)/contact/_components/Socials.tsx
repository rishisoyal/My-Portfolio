"use client";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useCursor, useTheme } from "@/store";

export default function Socials() {
  const { customCursorOn } = useCursor();
  const isDark = useTheme((s) => s.isDark);

  const socials = [
    {
      name: "github",
      href: "https://github.com/rishisoyal",
      icon: <FaGithub size={20} />,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/rishisoyal",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "youtube",
      href: "https://www.youtube.com",
      icon: <FaYoutube size={20} />,
    },
  ];

  return (
    <div className="socials flex gap-4 py-2">
      {socials.map((social) => (
        <span key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500 hover:-translate-y-1 ${isDark ? "hover:shadow-[0px_0px_30px_#5160b2]" : "hover:shadow-[0px_0px_30px_#7287fd]"} ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
          >
            {social.icon}
          </a>
        </span>
      ))}
    </div>
  );
}
