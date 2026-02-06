"use client";
import { useCursor } from "@/store";

interface PrimaryButtonProps {
  content: string;
  icon: React.ReactNode;
}

export default function PrimaryButton({ content, icon }: PrimaryButtonProps) {
  const { customCursorOn } = useCursor();

  return (
    <button
      className={`rounded-full primary-btn before:rounded-full ${customCursorOn ? "cursor-none" : "cursor-pointer"}`}
    >
      <span className="font-semibold">{content}</span>
      <span className="absolute right-0 rounded-full bg-[#7287fd] dark:bg-[#5160b2] w-14 h-14 flex items-center justify-center text-xl">
        {icon}
      </span>
    </button>
  );
}
