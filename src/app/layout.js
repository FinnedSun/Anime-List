import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'

const gabarito = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Anime List',
  description: 'Fine Your Anime List Here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
