"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMap,
  FaPaperPlane,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import type { ChangeEvent, FormEvent } from "react";
import "../../../styles/contact.css";
import { useToast } from "@/store";

export default function Page() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    try {
      if (!res.ok) {
        showToast("error", (await res.json()).error);
      } else {
        showToast("success", (await res.json()).message);
      }
    } catch (error: unknown) {
      showToast("error", (error as Error).message);
    }
  }

  function handleFormChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <title>Rishi Soyal - Contact</title>

      <main className="mb-18 lg:mb-0">
        <section className="flex flex-col p-3 sm:p-8 justify-center gap-8 w-full">
          <div className="h-24 w-full flex items-center justify-center">
            <div className="text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn">
              CONTACT
            </div>
            <h1 className="text-4xl sm:text-6xl flex items-center justify-center font-bold w-full h-full">
              GET IN<span className="text-[#5160b2] px-4">TOUCH</span>
            </h1>
          </div>
          <div className="w-full p-1 lg:p-12 animate__animated animate__fadeInUp">
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-14">
              {/* Left section */}
              <div className="left flex gap-8 flex-col w-full lg:w-100">
                {/* Main text */}
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold w-full flex items-center justify-start py-2">
                    <h2>DON&apos;T BE SHY!</h2>
                  </div>
                  <p className="text-left text-wrap dark:text-[#cdd6f4]">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                </div>
                {/* Contact info container */}
                <div className="flex flex-col gap-4 items-start justify-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <FaMap size={30} />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-gray-500 dark:text-gray-400">
                        ADDRESS POINT
                      </h5>
                      <p className="text-[14px]">
                        357, Laxmi Narayan Puri, Jaipur, Rajasthan, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <IoMdMailOpen size={30} />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-gray-500 dark:text-gray-400">
                        MAIL ME
                      </h5>
                      <a
                        href="mailto:rishisoyal510@gmail.com"
                        className="text-[14px]"
                      >
                        rishisoyal510@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <FaPhoneAlt size={30} />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-gray-500 dark:text-gray-400">
                        CALL ME
                      </h5>
                      <a href="tel:+91 6367830221" className="text-[14px]">
                        +91 6367830221
                      </a>
                    </div>
                  </div>
                </div>
                {/* Social media */}
                <div className="socials flex gap-4 py-2">
                  <span>
                    <a
                      href="https://github.com/rishisoyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500"
                    >
                      <FaGithub size={20} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/rishisoyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </span>
                </div>
              </div>
              {/* Right section */}
              <div className="flex w-full lg:w-180 min-h-full">
                <div className="w-full">
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-2"
                  >
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
                        placeholder="YOUR MESSSAGE"
                        className="p-3 sm:py-4 px-6 rounded-4xl bg-gray-300 dark:bg-[#313244] text-black dark:text-white w-full outline-none text-[14px] sm:text-[16px] min-h-40 border-2 border-transparent focus:border-[#5160b2] transition-border duration-200"
                        rows={5}
                      ></textarea>
                    </div>
                    {/* Honeypot for spam detection */}
                    <div className="hidden">
                      <input
                        onChange={handleFormChange}
                        value={formData.company}
                        type="text"
                        name="company"
                        id="company"
                        placeholder="HONEYPOT"
                      />
                    </div>
                    <div className="w-full px-4 flex flex-col md:flex-row">
                      <button className="primary-btn rounded-full before:rounded-full">
                        <span className="font-semibold">SEND MESSAGE</span>
                        <span className="rounded-full bg-[#7287fd] dark:bg-[#5160b2] w-14 h-14 right-0 absolute flex items-center justify-center text-xl">
                          <FaPaperPlane size={20} />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
