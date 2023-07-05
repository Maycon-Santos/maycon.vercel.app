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

type MatchFn = (matches: { [k in ThemeMode]: boolean | string | number }) => any

type ThemeModeContextValue = {
  themeMode: ThemeMode
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
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
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
    const [currentMode] = document.body.className.match(/\w+(-mode)/) || ['']

    document.body.className = document.body.className.replace(
      currentMode,
      `${themeMode}-mode`,
    )
  }, [themeMode])

  return (
    <ThemeModeContext.Provider value={{ themeMode, match, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)

export default ThemeModeProvider
