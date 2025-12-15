import { createFileRoute } from '@tanstack/react-router'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { LuBriefcaseBusiness } from 'react-icons/lu'
import { MdOutlineFileDownload } from 'react-icons/md'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const skills = [
    {
      name: 'HTML',
      level: 25,
    },
    {
      name: 'JavaScript',
      level: 89,
    },
    {
      name: 'CSS',
      level: 70,
    },
    {
      name: 'ReactJS',
      level: 70,
    },
    {
      name: 'Python',
      level: 60,
    },
    {
      name: 'C++',
      level: 30,
    },
    {
      name: 'Java',
      level: 20,
    },
    {
      name: 'NodeJS',
      level: 80,
    },
  ]
  const experienceEducation = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <main className='mb-14 lg:mb-0 max-w-screen overflow-x-hidden'>
        <section className="flex flex-col p-3 sm:p-8 relative items-center justify-center gap-8 w-full min-h-screen">
          <div className='h-24 w-full flex items-center justify-center'>
            <div className='text-6xl sm:text-9xl absolute opacity-15 font-bold -z-9 text-center flex items-center justify-center animate__animated animate__zoomIn'>RESUME</div>
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
                      <strong>First Name:</strong> Rishi
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Last Name:</strong> Soyal
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Age:</strong> 21 Years
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Nationality:</strong> Indian
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Freelance:</strong>{' '}
                      <span className="available">Available</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Address:</strong> Cool Place
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Phone:</strong> +911234567890
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Email:</strong> cooldude@mail.com
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>GitHub:</strong> rishisoyal
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-1">
                      <strong>Languages:</strong> Hindi, English
                    </div>
                  </div>
                  <button className="flex items-center justify-between cursor-pointer gap-2 p-4 overflow-hidden mt-4 relative bg-transparent rounded-full w-60 border-2 border-[#5160b2] before:w-full before:rounded-full before:bg-[#5160b2] before:absolute before:inset-0 before:-z-1 before:translate-x-full hover:before:translate-x-0 before:transition-all before:duration-500 before:ease-out mb-10 hover:translate-x-3 transition-all duration-500">
                    <span className="font-semibold">DOWNLOAD CV</span>
                    <span className="rounded-full bg-[#5160b2] w-14 h-14 right-0 absolute flex items-center justify-center text-xl">
                      <MdOutlineFileDownload size={30}/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 h-max animate__animated animate__slideInRight">
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-3 sm:p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">12+</span>
                <span className="stat-text text-sm sm:text-lg">YEARS OF EXPERIENCE</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">97+</span>
                <span className="stat-text text-sm sm:text-lg">COMPLETED PROJECTS</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">81+</span>
                <span className="stat-text text-sm sm:text-lg">HAPPY CUSTOMERS</span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-max-content h-32 p-6 py-12 border-2 border-[#45475a] rounded-xl">
                <span className="font-bold text-4xl text-[#5160b2]">53+</span>
                <span className="stat-text text-sm sm:text-lg">AWARDS WON</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex items-center justify-center w-full py-6">
            <h2 className="text-2xl sm:text-4xl font-bold">MY SKILLS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-4/5 p-0 sm:p-2 gap-8 items-center place-content-center justify-items-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                data-aos={i%2 === 0? "fade-up-right": "fade-up-left"}
                className="w-full max-w-44 flex flex-col items-center justify-center"
              >
                <div className="w-full flex items-center justify-center">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    className="text-center flex items-center justify-center"
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.25,
                      strokeLinecap: 'round',

                      // Text size
                      textSize: '16px',

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `#5160b2`,
                      textColor: '#cdd6f4',
                      trailColor: '#cdd6f4',
                      backgroundColor: '#ffffff',
                    })}
                  />
                </div>
                <div className="w-full flex items-center justify-center p-2 sm:p-4">
                  <h2 className="text-xl">{skill.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='min-h-screen'>
          <div className="flex items-center justify-center w-full pt-12 pb-4">
            <h2 className="text-2xl sm:text-4xl font-bold">EXPERIENCE & EDUCATION</h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-3 sm:p-8 w-full lg:w-400 place-items-center">
              {experienceEducation.map((val, i) => (
                <div 
                data-aos={i%2===0? "fade-down-right": "fade-down-left"}
                className="flex gap-4 p-4 w-full lg:w-fit">
                  <div className="flex flex-col items-center justify-center">
                    <span className="p-2 bg-[#5160b2] rounded-full">
                      {' '}
                      <LuBriefcaseBusiness size={30}/>
                    </span>
                    <span className="w-1 h-full bg-gray-500"></span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>2018-present</div>
                    <h2 className='text-xl'>WEB DEVELOPER</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
