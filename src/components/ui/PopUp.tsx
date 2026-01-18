import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import '../../styles/popUp.css'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Popup({ isOpen, onClose, children }: Props) {
  if (typeof document === 'undefined') return null

  // render in seperate DOM
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={onClose}
          >
            <div
              className="bg-[#11111b] border-2 border-[#45475a] rounded-2xl w-full max-w-max max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-end">
                <button
                  onClick={onClose}
                  className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200"
                  title="Close Card"
                >
                  <AiOutlineCloseCircle size={30} />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
