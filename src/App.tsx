import type { AnyRouter } from '@tanstack/react-router'
import { RouterProvider } from '@tanstack/react-router'

type AppProps = {
  router: AnyRouter
}

export function App({ router }: AppProps) {
  return <RouterProvider router={router} />
}
