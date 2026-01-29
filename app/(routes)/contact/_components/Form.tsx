"use client";

import { useToast } from "@/store";
import type { ChangeEvent, SubmitEvent } from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import type { ContactForm } from "../types";

const Form = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: null,
  });
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(8000),
      });

      if (!res.ok) {
        showToast("error", (await res.json()).error);
      } else {
        showToast("success", (await res.json()).message);
      }
    } catch (error: unknown) {
      showToast("error", (error as Error).message);
    } finally {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: null,
      });
      setLoading(false);
    }
  }

  function handleFormChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
        <div className="w-full lg:p-2 flex gap-4 py-1  flex-col md:flex-row">
          <input
            onChange={handleFormChange}
            value={formData.name}
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder="YOUR NAME"
            className="p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 border-transparent focus:border-[#5160b2] transition-border duration-200"
          />
          <input
            onChange={handleFormChange}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="YOUR EMAIL"
            className="p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 border-transparent focus:border-[#5160b2] transition-border duration-200"
          />
        </div>
        <div className="w-full lg:p-2 py-1  flex-col md:flex-row">
          <input
            onChange={handleFormChange}
            value={formData.subject}
            type="text"
            name="subject"
            id="subject"
            required={true}
            placeholder="YOUR SUBJECT"
            className="p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 border-transparent focus:border-[#5160b2] transition-border duration-200"
          />
        </div>
        <div className="w-full lg:p-2 py-1">
          <textarea
            onChange={handleFormChange}
            value={formData.message}
            name="message"
            id="message"
            required={true}
            placeholder="YOUR MESSAGE"
            className="p-3 sm:py-4 px-6 rounded-4xl bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] min-h-40 border-2 border-transparent focus:border-[#5160b2] transition-border duration-200"
            rows={5}
          ></textarea>
        </div>
        {/* Honeypot for spam detection */}
        <div className="hidden">
          <input
            onChange={handleFormChange}
            value={formData.company ?? ""}
            type="text"
            name="company"
            id="company"
            placeholder="HONEYPOT"
          />
        </div>
        <div
          className={`w-full px-4 flex flex-col md:flex-row ${loading && "pointer-events-none opacity-50"}`}
        >
          <button
            type="submit"
            className="primary-btn rounded-full before:rounded-full"
          >
            <span className="font-semibold">SEND MESSAGE</span>
            <span
              className={`rounded-full bg-[#7287fd] dark:bg-[#5160b2] w-14 h-14 right-0 absolute flex items-center justify-center text-xl ${loading && "animate-spin"}`}
            >
              <FaPaperPlane size={20} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
