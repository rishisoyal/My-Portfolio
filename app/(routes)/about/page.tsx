import { ResumeDownloadButton, ExperienceEducation, Skills } from "./_components";

export default function Page() {
  return (
    <>
      <title>Rishi Soyal - About</title>

      <main className="mb-14 lg:mb-0 max-w-screen overflow-x-hidden">
        <section className="flex flex-col p-3 sm:p-8 relative items-center justify-center gap-8 w-full min-h-screen">
          <div className="h-24 w-full flex items-center justify-center">
            <div className="text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn">
              RESUME
            </div>
            <h1 className="text-4xl sm:text-6xl flex items-center justify-center font-bold w-full h-full">
              ABOUT<span className="text-[#5160b2] px-4">ME</span>
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center p-3 sm:p-8 w-full gap-2">
            {/* Personal info */}
            <div className="flex flex-col gap-4 w-full lg:w-1/2 animate__animated animate__slideInLeft">
              <h2 className="text-2xl text-[#5160b2] text-start py-2 w-full">
                PERSONAL INFO
              </h2>
              <div className="flex gap-6 w-full">
                <div className="flex flex-col gap-6 w-full justify-around">
                  <div className="grid grid-cols-2 gap-4 justify-around w-full">
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        First Name:
                      </span>
                      <span className="">Rishi</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Last Name:
                      </span>
                      <span className="">Soyal</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Age:
                      </span>
                      <span className="">21 Years</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Nationality:
                      </span>
                      <span className="">Indian</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Freelance:
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        Available
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Address:
                      </span>
                      <span className="">357, Laxmi Narayan Puri, Jaipur</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Phone:
                      </span>
                      <span className="">+91 6367830221</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1 flex-wrap">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Email:
                      </span>
                      <a
                        href="mailto:rishisoyal510@gmail.com"
                        className="text-wrap break-all"
                      >
                        rishisoyal510@gmail.com
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        GitHub:
                      </span>
                      <a
                        href="https://github.com/rishisoyal"
                        target="_blank"
                        className=""
                      >
                        rishisoyal
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <span className="text-[#7287fd] dark:text-[#cdd6f4]">
                        Languages:
                      </span>
                      <span className="">English, Hindi</span>
                    </div>
                  </div>
                  <ResumeDownloadButton/>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 h-max animate__animated animate__slideInRight">
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-3 sm:p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">12+</span>
                <span className="stat-text text-sm sm:text-lg">
                  YEARS OF EXPERIENCE
                </span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">97+</span>
                <span className="stat-text text-sm sm:text-lg">
                  COMPLETED PROJECTS
                </span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">81+</span>
                <span className="stat-text text-sm sm:text-lg">
                  HAPPY CUSTOMERS
                </span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">53+</span>
                <span className="stat-text text-sm sm:text-lg">AWARDS WON</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex items-center justify-center w-full py-8">
            <h2 data-aos="fade-down" className="text-2xl sm:text-4xl font-bold">
              MY SKILLS
            </h2>
          </div>
          <Skills />
        </section>
        <section className="min-h-screen">
          <div className="flex items-center justify-center w-full pt-15 pb-4">
            <h2 data-aos="fade-down" className="text-2xl sm:text-4xl font-bold">
              EXPERIENCE & EDUCATION
            </h2>
          </div>
          <ExperienceEducation />
        </section>
      </main>
    </>
  );
}
