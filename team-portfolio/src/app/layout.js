import { Inter } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "next-themes" 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Team Portfolio',
  description: 'A website project for showcasing team members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider enableSystem={true} attribute="class">
              {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
