import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    function handleMouseLeave() {
      setVisible(false)
    }

    function handleMouseOut(e: MouseEvent) {
      // relatedTarget === null means pointer left window
      if (!e.relatedTarget) {
        setVisible(false)
      }
    }

    function handleBlur() {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('blur', handleBlur)
    }
  }, [visible])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <div className=" pointer-events-none">
            <motion.div
              id="cursor"
              className={`fixed w-2 h-2 rounded-full -translate-1/2 bg-[#5160b2] z-90 pointer-events-none}`}
              style={{ top: pos.y, left: pos.x }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transitionDuration: 2000 }}
              exit={{ opacity: 0 }}
              id="trail"
              className={`fixed w-10 h-10 rounded-full -translate-1/2 bg-[#5160b2ae] border-[#5160b2] z-99 transition-all duration-500 ease-out pointer-events-none opacity-70`}
              style={{ top: pos.y, left: pos.x }}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
