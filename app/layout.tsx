import { GlobalContextsProviders } from './contexts'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next Auth and Prisma with Postgres | Home Page',
    template: ' Next Auth and Prisma with Postgres | %s'
  },
  description: 'Home Page',
  category: 'web development | Practice',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Postgres', 'Next Auth'],
  creator: 'Newman Ferrer',
  authors: [{ name: 'Newman Ferrer', url: 'https://github.com/newmanferrer' }]
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <GlobalContextsProviders>{children}</GlobalContextsProviders>
      </body>
    </html>
  )
}
