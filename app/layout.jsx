'use client'


import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import {usePathname} from 'next/navigation'



const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'wevo app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (pathname === '/chat') {
    return (
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    )
  }

  else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    )
  }

}