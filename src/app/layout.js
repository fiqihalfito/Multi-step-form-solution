import './globals.css'
import { ubuntu } from './_fonts'

export const metadata = {
  title: 'Frontend Mentor - Multi-step form solution',
  description: 'Frontend Mentor - Multi-step form solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body className='font-ubuntu bg-slate-200'>
        {children}
      </body>
    </html>
  )
}
