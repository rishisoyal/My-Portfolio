import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import AnimatedRoutes from '../components/AnimatedRoutes'
import 'animate.css'
import CustomCursor from '@/components/CustomCursor'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <CustomCursor /> */}
      <Header />
      <AnimatedRoutes>
        <Outlet />
      </AnimatedRoutes>

      {/* <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </>
  ),
})
