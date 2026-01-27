import { Outlet, createRootRoute } from '@tanstack/react-router'
import 'animate.css'
import { useEffect } from 'react'
import {
  AnimatedRoutes,
  CustomCursor,
  Header,
  ThemeChangeButton,
} from '@/components/ui'
import { useTheme } from '@/store'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const setIsDark = useTheme((s) => s.setIsdark)
  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      // default = dark
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [setIsDark])
  return (
    <>
      <ThemeChangeButton />
      <CustomCursor />
      <Header />

      <AnimatedRoutes>
        <Outlet />
      </AnimatedRoutes>
    </>
  )
}
