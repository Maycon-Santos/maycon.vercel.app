import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'
import classNames from 'classnames'
import ThemeModeProvider from '@/components/shared/theme-mode/theme-mode'
import '@/styles/global.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const materialSymbols = localFont({
  variable: '--font-family-symbols',
  style: 'normal',
  src: '../../node_modules/material-symbols/material-symbols-rounded.woff2',
  display: 'block',
  weight: '100 700',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={classNames(
          ubuntu.className,
          materialSymbols.variable,
          'light-mode',
        )}
      >
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  )
}
