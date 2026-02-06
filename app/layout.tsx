"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import "animate.css";
import { useEffect } from "react";
import {
  AnimatedRoutes,
  CustomCursor,
  Header,
  ScrollToTop,
  ThemeChangeButton,
  ToastNotification,
  CustomCursorToggleButton,
} from "@/components/ui";
import { useTheme, useCursor } from "@/store";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: "600",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setIsDark = useTheme((s) => s.setIsdark);
  const { customCursorOn, toggleCursor } = useCursor();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const cursor = String(localStorage.getItem("cursor")) as
      | "default"
      | "custom";

    if (cursor === "custom" && !customCursorOn) {
      toggleCursor();
    } else if (cursor === "default" && customCursorOn) {
      toggleCursor();
    }

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // default = dark
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, [setIsDark, customCursorOn, toggleCursor]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/R_logo.png" type="image/x-icon" />
      </head>

      <body
        className={`${poppins.className} antialiased ${customCursorOn ? "cursor-none" : "cursor-auto"}`}
      >
        <div className="fixed top-0 right-0 z-20 p-4 flex gap-2">
          <ThemeChangeButton />
          <CustomCursorToggleButton />
        </div>
        <ToastNotification />
        {customCursorOn && <CustomCursor />}
        <Header />

        <AnimatedRoutes>
          {" "}
          <ScrollToTop /> {children}
        </AnimatedRoutes>
      </body>
    </html>
  );
}

