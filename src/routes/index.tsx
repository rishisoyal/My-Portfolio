import { createFileRoute, Link } from '@tanstack/react-router'
import { ImArrowRight2 } from 'react-icons/im'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <main className="overflow-hidden relative min-h-screen mb-14 lg:mb-0">
        <div className="bg-[#89b4fa2b] absolute h-[200%] w-full -rotate-15 -left-[73%] -top-1/2 -z-1 hidden lg:block animate__animated animate__slideInLeft"></div>
        <div className="p-8 flex flex-col lg:flex-row justify-evenly items-center animate__animated animate__fadeInUp">
          <img
            src="https://setaswall.com/wp-content/uploads/2020/03/Aesthetic-Mobile-Wallpaper-620x1308-098-340x550.jpg"
            alt=""
            className="w-60 h-60 lg:rounded-2xl lg:w-120 lg:h-164 rounded-full border-2 lg:border-0 shadow-2xl border-[#45475a]"
          />
          <div className="flex flex-col items-center justify-center p-6 sm:w-200">
            <div className="flex items-center justify-center flex-col sm:w-full sm:p-15">
              <div className="flex flex-col p-4 pt-6 pb-8">
                <span className="text-4xl sm:text-6xl font-bold text-[#5160b2]">
                  I'M RISHI SOYAL.
                </span>
                <span className="text-4xl sm:text-6xl font-bold">
                  WEB DEVELOPER
                </span>
              </div>
              <div className="p-4 md:w-180 lg:w-130 w-screen">
                <p className="text-wrap text-center lg:text-left w-full lg:w-130 sm:text-xl text-[#cdd6f4]">
                  I'm an India based full-stack web developer focused on
                  crafting clean & user-friendly experiences, I am passionate
                  about building excellent software that improves the lives of
                  those around me.
                </p>
              </div>
              <div className="w-full flex items-center lg:pl-18 justify-center lg:justify-start">
                <Link to="/about">
                  <button className="rounded-full primary-btn before:rounded-full">
                    <span className="font-semibold">MORE ABOUT ME</span>
                    <span className="absolute right-0 rounded-full bg-[#5160b2] w-14 h-14 flex items-center justify-center text-xl">
                      <ImArrowRight2 size={25} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#89b4fa2b] absolute h-[200%] w-full -rotate-15 -right-[73%] -bottom-1/2 -z-1 hidden lg:block animate__animated animate__slideInRight"></div>
      </main>
    </>
  )
}
