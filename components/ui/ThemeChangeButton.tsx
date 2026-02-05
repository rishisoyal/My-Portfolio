'use client'

import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/store/themeStore'

const ThemeChangeButton = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="fixed top-0 w-full z-99 flex items-end justify-end right-0 p-4">
      <button id="theme-btn" className="cursor-pointer sm:cursor-none" onClick={toggleTheme}>
        {isDark ? (
          <FaSun size={25} color="#5160b2" />
        ) : (
          <FaMoon size={25} color="#5160b2" />
        )}
      </button>
    </div>
  )
}

export default ThemeChangeButton
