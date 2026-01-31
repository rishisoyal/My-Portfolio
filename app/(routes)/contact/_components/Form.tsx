"use client";

import { useToast } from "@/store";
import type { ChangeEvent, SubmitEvent } from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import type { ContactForm } from "../types";
import { z } from "zod";
import { Tooltip } from "@mui/material";

type FormErrors = Partial<Record<keyof ContactForm, string>>;

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
  const [formError, setFormError] = useState<FormErrors>({});

  function validateForm() {
    const form = z.object({
      name: z.string().max(20, "Name can not be more than 20 characters"),
      email: z.email("Invalid email"),
      subject: z
        .string()
        .max(100, "Subject can not be more than 100 characters"),
      message: z
        .string()
        .max(500, "Message can not be more than 500 characters"),
      company: z.string().or(z.null()),
    });

    const result = form.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        fieldErrors[field] = issue.message;
      });

      setFormError(fieldErrors);
      return false;
    }

    setFormError({});
    return true;
  }

  async function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(8000), // request timeout (8 sec)
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
    setFormError((prev) => ({ ...prev, [name]: "" }));
  }

  const toolTipSlotProps = {
    tooltip: {
      sx: {
        bgcolor: "#d20f3982",
        color: "#fff",
        fontSize: "14px",
        border: "1px solid #d20f39",
      },
    },
    arrow: {
      sx: {
        color: "#d20f3982",
      },
    },
  };

  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
        <div className="w-full lg:p-2 flex gap-4 py-1  flex-col md:flex-row">
          <Tooltip
            title={formError.name}
            open={!!formError.name}
            arrow
            slotProps={toolTipSlotProps}
          >
            <input
              onChange={handleFormChange}
              // onFocus={}
              value={formData.name}
              type="text"
              name="name"
              id="name"
              required={true}
              placeholder="YOUR NAME"
              className={`p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 focus:border-[#5160b2] transition-border duration-200 ${!!formError.name ? "border-[#d20f3982]" : "border-transparent"}`}
            />
          </Tooltip>
          <Tooltip
            title={formError.email}
            open={!!formError.email}
            arrow
            slotProps={toolTipSlotProps}
          >
            <input
              onChange={handleFormChange}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              required={true}
              placeholder="YOUR EMAIL"
              className={`p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 focus:border-[#5160b2] transition-border duration-200 ${!!formError.email ? "border-[#d20f3982]" : "border-transparent"}`}
            />
          </Tooltip>
        </div>
        <div className="w-full lg:p-2 py-1  flex-col md:flex-row">
          <Tooltip
            title={formError.subject}
            open={!!formError.subject}
            arrow
            slotProps={toolTipSlotProps}
          >
            <input
              onChange={handleFormChange}
              value={formData.subject}
              type="text"
              name="subject"
              id="subject"
              required={true}
              placeholder="YOUR SUBJECT"
              className={`p-3 sm:py-4 px-6 rounded-full bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] border-2 focus:border-[#5160b2] transition-border duration-200 ${!!formError.subject ? "border-[#d20f3982]" : "border-transparent"}`}
            />
          </Tooltip>
        </div>
        <div className="w-full lg:p-2 py-1">
          <Tooltip
            title={formError.message}
            open={!!formError.message}
            arrow
            slotProps={toolTipSlotProps}
          >
            <textarea
              onChange={handleFormChange}
              value={formData.message}
              name="message"
              id="message"
              required={true}
              placeholder="YOUR MESSAGE"
              className={`p-3 sm:py-4 px-6 rounded-4xl bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] min-h-40 border-2 focus:border-[#5160b2] transition-border duration-200 ${!!formError.message ? "border-[#d20f3982]" : "border-transparent"}`}
              rows={5}
            ></textarea>
          </Tooltip>
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
