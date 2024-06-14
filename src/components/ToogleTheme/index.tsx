'use client'
import { useTheme } from '@/styles/context/ThemeContext'

export function ToogleTheme() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}
