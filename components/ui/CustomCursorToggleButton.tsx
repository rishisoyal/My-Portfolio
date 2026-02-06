"use client";

import { useCursor } from "@/store";
import { LuPointer, LuPointerOff } from "react-icons/lu";

const CustomCursorToggleButton = () => {
  const { customCursorOn, toggleCursor } = useCursor();

  return (
    <div>
      <button
        id="cursor-toggle-btn"
        className={`p-2 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-300 ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
        onClick={toggleCursor}
        title={
          customCursorOn ? "Disable Custom Cursor" : "Enable Custom Cursor"
        }
      >
        {customCursorOn ? (
          <LuPointerOff />
        ) : (
          <LuPointer />
        )}
      </button>
    </div>
  );
};

export default CustomCursorToggleButton;
