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
} from "@/components/ui";
import { useTheme } from "@/store";
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
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // default = dark
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, [setIsDark]);

  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/R_logo.png" type="image/x-icon" />
      </head>

      <body className={`${poppins.className} antialiased`}>
        <ToastNotification />
        <ThemeChangeButton />
        <CustomCursor />
        <Header />

        <AnimatedRoutes>
          {" "}
          <ScrollToTop /> {children}
        </AnimatedRoutes>
      </body>
    </html>
  );
}
