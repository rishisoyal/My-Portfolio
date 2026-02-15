"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);

  // "Spring" version for the trail (smoother than CSS transitions)
  const springConfig = { damping: 25, stiffness: 200 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleDown = () => scale.set(1.5);
    const handleUp = () => scale.set(1);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.("button, a, input, [data-cursor-scale]")) {
        scale.set(1.5);
      }
    };

    const handleOut = () => scale.set(1);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [mouseX, mouseY, scale, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main Dot: Follows mouse exactly */}
          <motion.div
            className="fixed w-2 h-2 rounded-full bg-[#5160b2] -translate-x-1/2 -translate-y-1/2"
            style={{ x: mouseX, y: mouseY }}
          />

          {/* Trail: Follows mouse with a spring physics "lag" */}
          <motion.div
            className="fixed w-10 h-10 rounded-full bg-[#5160b2ae] transition-transform duration-500 ease-out opacity-70 -translate-x-1/2 -translate-y-1/2"
            style={{
              x: trailX,
              y: trailY,
              scale: scale,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
