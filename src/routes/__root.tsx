import { Outlet, createRootRoute } from '@tanstack/react-router'
import 'animate.css'
import aos from 'aos'
import { AnimatedRoutes, CustomCursor, Header } from '@/components/ui'

export const Route = createRootRoute({
  component: () => {
    aos.init()
    return (
      <>
        <CustomCursor />
        <Header />

        <AnimatedRoutes>
          <Outlet />
        </AnimatedRoutes>
      </>
    )
  },
})
