"use client"
import { SessionProvider } from "next-auth/react"
export default function Provider({children}) {
  return (
    <SessionProvider basePath="/api/auth">
      {children}
    </SessionProvider>
  )
}