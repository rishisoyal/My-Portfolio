import { RouterProvider } from '@tanstack/react-router'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import type { AnyRouter } from '@tanstack/react-router'

type AppProps = {
  router: AnyRouter
}

export function App({ router }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-out',
      once: true,
    })
  }, [])

  return <RouterProvider router={router} />
}
