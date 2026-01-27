import { createFileRoute } from '@tanstack/react-router'
import '../styles/portfolio.css'
import { useEffect, useState } from 'react'
import { IoCodeSlash } from 'react-icons/io5'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Popup } from '@/components/ui'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

interface Portfolio {
  name?: string
  desc?: string
  img?: string
  public_url?: string
  github?: string
  techStack?: Array<string>
}

function RouteComponent() {
  const portfolios: Array<Portfolio> = [
    {
      name: 'Weather App',
      desc: 'A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
      techStack: ['Javascript', 'Svelte'],
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
    {
      name: 'Weather App',
      desc: '',
      img: '/weather_app.webp',
      public_url: 'https://weather-app-rishisoyal.vercel.app/',
      github: 'https://github.com/rishisoyal/Weather-App',
    },
  ]

  const [previewMode, setPreviewMode] = useState(false)
  const [portfolioToPreview, setPortfolioToPreview] =
    useState<Portfolio | null>(null)

  function handlePortfolioClick(index: number) {
    const portfolio = portfolios[index]
    setPortfolioToPreview(portfolio)
    setPreviewMode(true)
  }

  useEffect(() => {
    previewMode
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [previewMode])

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
            <div className="w-full flex items-center justify-center">
              <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-284 place-items-center gap-8">
                {portfolios.map((portfolio, i) => (
                  <div
                    key={i}
                    onClick={() => handlePortfolioClick(i)}
                    className={`card relative rounded-2xl flex items-center justify-center w-full h-55 cursor-pointer overflow-hidden bg-cover transition-all duration-300 ease-in-out bg-center animate__animated animate__slideInLeft animate__delay-${i} border-2 border-[#45475a]`}
                  >
                    <img
                      className="w-full h-full bg-cover"
                      src={portfolio.img}
                      alt={portfolio.name}
                    />
                    <span className="w-full h-full absolute bg-[#000000] opacity-0 hover:opacity-50 transition-all duration-500 ease-in-out flex items-center justify-center"></span>
                    <h2 className="text-3xl absolute font-semibold text-[#5160b2] brightness-200 opacity-0 top-5 transition-all duration-500 pointer-events-none">
                      {portfolio.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Popup
          isOpen={previewMode}
          onClose={() => {
            setPreviewMode(false)
          }}
        >
          {' '}
          <PortfolioCard portfolio={portfolioToPreview!} />
        </Popup>
      </main>
    </>
  )
}

function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <>
      <div className="w-full md:w-160 h-max">
        <div className="w-full flex items-center justify-center text-3xl sm:text-4xl">
          <h2 className="text-[#5160b2]">{portfolio.name}</h2>
        </div>
        {/* Info section */}
        <div className="p-4 flex flex-col ga-4 text-sm sm:text-[1rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gp-4">
            <div className="flex items-center gap-2 p-2">
              {' '}
              <IoCodeSlash size={25} />{' '}
              <span className="text-nowrap">Tech Stack: </span>
              <strong className="text-[#5160b2] dark:text-[#cdd6f4] flex flex-wrap">
                {portfolio.techStack?.join(', ')}
              </strong>
            </div>
            <div className="flex items-center gap-2 p-2">
              <FaArrowUpRightFromSquare />
              Preview:{' '}
              <a
                href={portfolio.public_url}
                target="_blank"
                className=" text-[#5160b2] underline"
              >
                <strong>Check out the app</strong>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 flex-col justify-start">
            <div className="flex gap-2 w-full">
              {' '}
              <IoMdInformationCircleOutline size={25} /> About this project:
            </div>
            <p className="text-[#5160b2] dark:text-[#cdd6f4]">{portfolio.desc}</p>
          </div>
        </div>

        <div>
          <img
            className="w-full rounded-2xl border border-[#45475a]"
            src={portfolio.img}
            alt={portfolio.name}
          />
        </div>
      </div>
    </>
  )
}
