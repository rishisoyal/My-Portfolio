"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/store";
import { usePathname } from "next/navigation";

export default function AnimatedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentKey = usePathname();
  const isDark = useTheme((s) => s.isDark);
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <AnimatePresence>
          <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="min-h-screen"
          >
            {children}
          </div>
          <motion.div
            key={currentKey}
            initial={{
              top: "0%",
            }}
            animate={{
              top: "100%",
              transition: {
                duration: 1.0,
                ease: [0.77, 0, 0.175, 1],
                direction: { from: "top" },
                delay: 0,
              },
            }}
            exit={{
              display: "none",
            }}
            style={{
              position: "fixed",
              inset: 0,
              background: `${isDark ? "#1e1e2e" : "#8CAAEE"}`,
              zIndex: 99,
              transformOrigin: "top center",
            }}
          ></motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
