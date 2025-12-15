import { createFileRoute, Link } from '@tanstack/react-router'
import { ImArrowRight2 } from 'react-icons/im'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <main className="overflow-hidden relative min-h-screen mb-14 lg:mb-0">
        <div className="bg-[#89b4fa2b] absolute h-[200%] w-full -rotate-15 -left-[73%] -top-1/2 -z-1 hidden lg:block animate__animated animate__fadeInLeft"></div>
        <div className="p-8 flex flex-col lg:flex-row justify-evenly items-center">
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
                  <button className="flex items-center justify-between cursor-pointer gap-2 p-4 overflow-hidden mt-4 relative bg-transparent rounded-full w-60 border-2 border-[#5160b2] before:w-full before:rounded-full before:bg-[#5160b2] before:absolute before:inset-0 before:-z-1 before:translate-x-full hover:before:translate-x-0 before:transition-all before:duration-500 before:ease-out hover:translate-x-3 transition-all duration-500">
                    <span className="font-semibold">ABOUT ME</span>
                    <span className="absolute right-0 rounded-full bg-[#5160b2] w-14 h-14 flex items-center justify-center text-xl">
                      <ImArrowRight2 size={25} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#89b4fa2b] absolute h-[200%] w-full -rotate-15 -right-[73%] -bottom-1/2 -z-1 hidden lg:block animate__animated animate__fadeInRight"></div>
      </main>
    </>
  )
}
