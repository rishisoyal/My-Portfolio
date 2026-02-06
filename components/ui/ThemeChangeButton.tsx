"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme, useCursor } from "@/store";

const ThemeChangeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  const { customCursorOn } = useCursor();

  return (
    <div>
      <button
        id="theme-btn"
        className={`p-2 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500 ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
        onClick={toggleTheme}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? (
          <FaSun />
        ) : (
          <FaMoon />
        )}
      </button>
    </div>
  );
};

export default ThemeChangeButton;
