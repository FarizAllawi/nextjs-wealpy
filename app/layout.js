import './globals.css'
import { Poppins } from 'next/font/google'
import { ReduxProvider, SessionProvider } from '@/lib'
import {Suspense} from 'react'

import {
  Navbar,
  Footer
} from "@/components";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={poppins.className}>
      <div className="relative max-w-screen min-h-screen overflow-hidden">
        <div className="circle-green -z-10"></div>
        <div className="circle-red -z-10"></div>
          <SessionProvider>
            <ReduxProvider>
              <Suspense>
                <Navbar />
              </Suspense>
              <div className="relative flex w-screen min-h-screen">
                {children}
              </div>
              <Suspense>
                <Footer />
              </Suspense>
            </ReduxProvider>
          </SessionProvider>
      </div>
    </body>
    </html>
  )
}
