"use client";

import { useCursor } from "@/store";
import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeDownloadButton = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { customCursorOn } = useCursor();

  return (
    <>
      <a
        ref={linkRef}
        href="/Rishi Soyal - Resume.pdf"
        target="_blank"
        download={true}
        className={`hidden ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
      />
      <button
        onClick={() => {
          // window.open("/Rishi Soyal - Resume.pdf");
          linkRef.current?.click();
        }}
        className={`primary-btn rounded-full before:rounded-full mb-12 ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
      >
        <span className="font-semibold">DOWNLOAD CV</span>
        <span className="rounded-full bg-[#7287fd] dark:bg-[#5160b2] w-14 h-14 right-0 absolute flex items-center justify-center text-xl">
          <MdOutlineFileDownload size={30} />
        </span>
      </button>
    </>
  );
};

export default ResumeDownloadButton;
