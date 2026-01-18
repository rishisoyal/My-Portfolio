import { Outlet, createRootRoute } from '@tanstack/react-router'
import 'animate.css'
import { Header, CustomCursor, AnimatedRoutes } from '@/components/ui'

export const Route = createRootRoute({
  component: () => (
    <>
      <CustomCursor />
      <Header />

      <AnimatedRoutes>
        <Outlet />
      </AnimatedRoutes>
    </>
  ),
})
