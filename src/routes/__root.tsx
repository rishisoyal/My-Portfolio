import { Outlet, createRootRoute } from '@tanstack/react-router'
import 'animate.css'
import AnimatedRoutes from '../components/AnimatedRoutes'
import Header from '../components/Header'
// import CustomCursor from '@/components/CustomCursor'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <CustomCursor /> */}
      <Header />

      <AnimatedRoutes>
        <Outlet />
      </AnimatedRoutes>
    </>
  ),
})
