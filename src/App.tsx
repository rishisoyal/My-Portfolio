import { RouterProvider, Outlet } from '@tanstack/react-router'
import type { Router } from '@tanstack/react-router'
import AnimatedRoutes from './components/AnimatedRoutes'

interface AppProps<TRouter extends Router> {
  router: TRouter
}

export function App<TRouter extends Router>({ router }: AppProps<TRouter>) {
  return (
    <RouterProvider router={router}>
      <AnimatedRoutes>
        <Outlet/>
      </AnimatedRoutes>
    </RouterProvider>
  )
}
