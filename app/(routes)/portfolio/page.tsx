import { Projects } from "./_components";
import './styles/portfolio.css'

export default function Page() {
  return (
    <>
      <title>Rishi Soyal - Portfolio</title>

      <main className="mb-14 lg:mb-0">
        <section className="flex flex-col p-8 justify-center gap-8 w-full">
          <div className="h-24 w-full flex items-center justify-center">
            <div className="text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn">
              WORKS
            </div>
            <h1 className="text-4xl sm:text-6xl flex items-center justify-center font-bold w-full h-full">
              MY<span className="text-[#5160b2] px-4">PORTFOLIOS</span>
            </h1>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center justify-center p-4 py-8">
              <ul className="flex gap-4 text-[18px]">
                <li className="cursor-pointer hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  All
                </li>
                <li className="cursor-pointer hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  Websites
                </li>
                <li className="cursor-pointer hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  Apps
                </li>
              </ul>
            </div>
            <Projects />
          </div>
        </section>
      </main>
    </>
  );
}
