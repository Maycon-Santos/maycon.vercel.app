import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'
import { Metadata } from 'next'
import Script from 'next/script'
import classNames from 'classnames'
import ThemeModeProvider from '@/components/shared/theme-mode/theme-mode'
import '@/styles/global.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

const materialSymbols = localFont({
  variable: '--font-family-symbols',
  style: 'normal',
  src: '../../node_modules/material-symbols/material-symbols-rounded.woff2',
  display: 'block',
  weight: '100 700',
})

export const metadata: Metadata = {
  title: 'Maycon - Desenvolvedor web full-stack',
  description:
    'Olá, eu sou o Maycon, um desenvolvedor web full-stack apaixonado por criar sites e aplicativos incríveis com as melhores tecnologias. Neste site você pode ver meu portfólio e meu contato.',
  keywords:
    'desenvolvedor web full-stack no Brasil, criação de sites e aplicativos, portfólio profissional, dicas de programação, HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB, Firebase, WordPress, SEO, marketing digital, e-commerce',
  robots: 'index, follow',
  authors: {
    name: 'Maycon Santos',
    url: 'https://www.linkedin.com/in/maycon-link/',
  },
  openGraph: {
    title: 'Maycon - Desenvolvedor web full-stack',
    description:
      'Olá, eu sou o Maycon, um desenvolvedor web full-stack apaixonado por criar sites e aplicativos incríveis com as melhores tecnologias. Neste site você pode ver meu portfólio e meu contato.',
    images: '/assets/images/og-image.jpg',
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JTPMGZQ7NJ"
        />
        <Script id="gtag">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-JTPMGZQ7NJ');
              `}
        </Script>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#21222c" />
      </head>
      <body
        className={classNames(
          ubuntu.className,
          materialSymbols.variable,
          'dark-mode',
        )}
      >
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  )
}
