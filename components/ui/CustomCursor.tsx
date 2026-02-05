"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const lastPos = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hasShown = false;

    function isCursorScaleTarget(el: Element | null) {
      if (!el) return false;
      const tag = el.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        tag === "A" ||
        tag === "BUTTON"
      )
        return true;
      try {
        return !!el.closest && !!el.closest("[data-cursor-scale]");
      } catch {
        return false;
      }
    }

    function move(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      if (!hasShown) {
        hasShown = true;
        setVisible(true);
      }

      lastPos.current = { x, y };

      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${x}px, ${y}px, 0)`,
      );

      trailRef.current?.style.setProperty(
        "transform",
        `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`,
      );
    }

    function hide() {
      setVisible(false);
      hasShown = false;
    }

    function handleMouseOut(e: MouseEvent) {
      if (!e.relatedTarget) {
        hide();
      }
    }

    function handleMouseDown() {
      scaleRef.current = 1.2;
      const { x, y } = lastPos.current;
      trailRef.current?.style.setProperty(
        "transform",
        `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`,
      );
    }

    function handleMouseUp() {
      scaleRef.current = 1;
      const { x, y } = lastPos.current;
      trailRef.current?.style.setProperty(
        "transform",
        `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`,
      );
    }

    function handleElementOver(e: MouseEvent) {
      const el = e.target as Element | null;
      if (isCursorScaleTarget(el)) {
        scaleRef.current = 1.2;
        const { x, y } = lastPos.current;
        trailRef.current?.style.setProperty(
          "transform",
          `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`,
        );
      }
    }

    function handleElementOut(e: MouseEvent) {
      const el = e.target as Element | null;
      if (isCursorScaleTarget(el)) {
        scaleRef.current = 1;
        const { x, y } = lastPos.current;
        trailRef.current?.style.setProperty(
          "transform",
          `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`,
        );
      }
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleElementOver);
    window.addEventListener("mouseout", handleElementOut);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", hide);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleElementOver);
      window.removeEventListener("mouseout", handleElementOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-99"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            ref={cursorRef}
            className="fixed w-2 h-2 rounded-full bg-[#5160b2] -translate-1/2 z-90"
            id="cursor"
          />
          <div
            ref={trailRef}
            className="fixed w-10 h-10 rounded-full bg-[#5160b2ae] opacity-70 -translate-1/2 z-99 transition-transform duration-500 ease-out"
            id="trail"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
