'use client'

import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

export type ThemeMode = 'dark' | 'light'

type MatchFn = (matches: { [k in ThemeMode]: any }) => any

type ThemeModeContextValue = {
  themeMode?: ThemeMode
  match: MatchFn
  toggleThemeMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue>({
  themeMode: 'dark',
  match: () => false,
  toggleThemeMode: () => void 0,
})

const ThemeModeProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [themeMode, setThemeMode] = useState<ThemeMode | undefined>(() => {
    const prefersDarkScheme = globalThis.matchMedia
      ? globalThis.matchMedia('(prefers-color-scheme: dark)')
      : null
    const currentTheme = globalThis.localStorage
      ? globalThis.localStorage.getItem('theme')
      : undefined

    if (currentTheme == 'dark') {
      return 'dark'
    }

    if (currentTheme === 'light') {
      return 'light'
    }

    if (prefersDarkScheme !== null) {
      if (prefersDarkScheme) {
        return 'dark'
      }

      if (prefersDarkScheme) {
        return 'light'
      }
    }
  })

  const match = useCallback<MatchFn>(
    (matches) =>
      Object.entries(matches).find(([key]) => key === themeMode)?.[1],
    [themeMode],
  )

  const toggleThemeMode = useCallback(() => {
    if (themeMode === 'dark') setThemeMode('light')
    if (themeMode === 'light') setThemeMode('dark')
  }, [themeMode])

  useLayoutEffect(() => {
    const [currentThemeMode] = document.body.className.match(/\w+(-mode)/) || [
      'dark-mode',
    ]

    if (themeMode) localStorage.setItem('theme', themeMode)

    document.body.classList.remove(`${currentThemeMode}`)
    document.body.classList.add(`${themeMode}-mode`)
  }, [themeMode])

  return (
    <ThemeModeContext.Provider value={{ themeMode, match, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)

export default ThemeModeProvider
