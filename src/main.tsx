import ReactDOM from 'react-dom/client'
import { createRouter } from '@tanstack/react-router'
import { App } from './App'

import { routeTree } from './routeTree.gen'
import reportWebVitals from './reportWebVitals'
import './styles.css'

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App router={router} />)
}

reportWebVitals()
