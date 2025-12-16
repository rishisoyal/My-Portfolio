import { useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

export default function AnimatedRoutes({
  children,
}: {
  children: React.ReactNode
}) {
  const state = useRouterState()
  const currentKey = state.matches.at(-1)?.routeId ?? state.location.pathname

  return (
    <>
      <div className="relative">
        <AnimatePresence>
          <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="min-h-screen"
          >
            {children}
          </div>
          <motion.div
            key={currentKey}
            initial={{
              top: '0%',
            }}
            animate={{
              top: '100%',
              transition: {
                duration: 0.7,
                ease: [0.77, 0, 0.175, 1],
                direction: { from: 'top' },
                delay: 0,
              },
            }}
            exit={{
              display: 'none',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: '#313244',
              zIndex: 9999,
              transformOrigin: 'top center',
            }}
          ></motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
