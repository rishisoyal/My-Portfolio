import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let hasShown = false

    function move(e: MouseEvent) {
      const x = e.clientX
      const y = e.clientY

      if (!hasShown) {
        hasShown = true
        setVisible(true)
        return
      }

      if (!cursorRef.current || !trailRef.current) return

      cursorRef.current.style.setProperty(
        'transform',
        `translate3d(${x}px, ${y}px, 0)`,
      )
      trailRef.current.style.setProperty(
        'transform',
        `translate3d(${x}px, ${y}px, 0)`,
      )
    }

    const hide = () => {
      hasShown = false
      setVisible(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('blur', hide)
    window.addEventListener('mouseout', hide)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('blur', hide)
      document.removeEventListener('mouseout', hide)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-99"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            ref={cursorRef}
            className="fixed w-2 h-2 rounded-full bg-[#5160b2] -translate-1/2 z-90"
            id="cursor"
          />
          <div
            ref={trailRef}
            className="fixed w-10 h-10 rounded-full bg-[#5160b2ae] opacity-70 -translate-1/2 z-99 transition-transform duration-500 ease-out"
            id="trail"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
