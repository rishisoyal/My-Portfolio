import {
  FaGithub,
  FaLinkedin,
  FaMap,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Form } from "./_components";

export default function Page() {
  return (
    <>
      <title>Rishi Soyal - Contact</title>

      <main className="mb-18 lg:mb-0 flex items-center justify-center lg:h-screen">
        <section className="flex flex-col p-3 sm:p-8 justify-center gap-8 w-full">
          <div className="h-24 w-full flex items-center justify-center">
            <div className="text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn">
              CONTACT
            </div>
            <h1 className="text-4xl sm:text-6xl flex items-center justify-center font-bold w-full h-full">
              GET IN<span className="text-[#5160b2] px-4 text-shadow-[0px_0px_50px_#7287fd]">TOUCH</span>
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
                  <p className="text-left text-wrap dark:text-[#cdd6f4] text-shadow-[0px_0px_30px_#5160b2]">
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
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_0px_30px_#5160b2]"
                    >
                      <FaGithub size={20} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/rishisoyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_0px_30px_#5160b2]"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-300 dark:bg-[#313244] rounded-full grid place-content-center hover:bg-[#7287fd] dark:hover:bg-[#5160b2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_0px_30px_#5160b2]"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </span>
                </div>
              </div>
              {/* Right section */}
              <div className="flex w-full lg:w-180 min-h-full">
                <Form />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
