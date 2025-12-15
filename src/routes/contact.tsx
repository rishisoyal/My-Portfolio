import { createFileRoute } from '@tanstack/react-router'
import { FaGithub, FaLinkedin, FaMap, FaPaperPlane, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className='mb-14 lg:mb-0'>
        <section className="flex flex-col p-3 sm:p-8 justify-center gap-8 w-full">
          <div className="h-24 w-full flex items-center justify-center">
            <div className="text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn">
              CONTACT
            </div>
            <h1 className="text-4xl sm:text-6xl flex items-center justify-center font-bold w-full h-full">
              GET IN<span className="text-[#5160b2] px-4">TOUCH</span>
            </h1>
          </div>
          <div className="w-full p-1 lg:p-12 animate__animated animate__zoomIn">
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-14">
              {/* Left section */}
              <div className="left flex gap-8 flex-col w-full lg:w-100">
                {/* Main text */}
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold w-full flex items-center justify-start">
                    <h2>DON'T BE SHY!</h2>
                  </div>
                  <p className="text-left text-wrap text-[#cdd6f4]">
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
                      <h5 className="text-gray-400">ADDRESS POINT</h5>
                      <p>My address</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <IoMdMailOpen size={30}/>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-gray-400">MAIL ME</h5>
                      <p>My Mail</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="">
                      <FaPhoneAlt size={30} />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-gray-400">CALL ME</h5>
                      <p>My phone</p>
                    </div>
                  </div>
                </div>
                {/* Social media */}
                <div className="flex gap-4 py-2">
                  <span>
                    <a
                      href="https://github.com/rishisoyal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={30} />
                    </a>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/rishisoyal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <span>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube size={30} />
                    </a>
                  </span>
                </div>
              </div>
              {/* Right section */}
              <div className="flex w-full lg:w-180 min-h-full">
                <div className="w-full">
                  <form className="flex flex-col gap-2">
                    <div className="w-full lg:p-2 flex gap-4 py-1  flex-col md:flex-row">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="YOUR NAME"
                        className="p-4 rounded-full bg-[#313244] text-white w-full outline-none"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YOUR EMAIL"
                        className="p-4 rounded-full bg-[#313244] text-white w-full outline-none"
                      />
                    </div>
                    <div className="w-full lg:p-2 py-1  flex-col md:flex-row">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="YOUR SUBJECT"
                        className="p-4 rounded-full bg-[#313244] text-white w-full outline-none"
                      />
                    </div>
                    <div className="w-full lg:p-2 py-1">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="YOUR MESSSAGE"
                        className="p-4 rounded-4xl bg-[#313244] text-white w-full outline-none"
                        rows={4}
                      ></textarea>
                    </div>
                    <div className='w-full lg:p-2 py-1  lex-col md:flex-row'>
                      <button className="flex items-center justify-between cursor-pointer gap-2 p-4 overflow-hidden mt-4 relative bg-transparent rounded-full w-60 border-2 border-[#5160b2] before:w-full before:rounded-full before:bg-[#5160b2] before:absolute before:inset-0 before:-z-1 before:translate-x-full hover:before:translate-x-0 before:transition-all before:duration-500 before:ease-out mb-10 animate__delay-1s hover:translate-x-3 transition-all duration-500">
                        <span className="font-semibold">SEND MESSAGE</span>
                        <span className="rounded-full bg-[#5160b2] w-14 h-14 right-0 absolute flex items-center justify-center text-xl">
                          <FaPaperPlane size={20}/>
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
  )
}
