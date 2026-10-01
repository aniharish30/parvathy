import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Caveat, Playfair_Display } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor'
import MusicPlayer from '@/components/MusicPlayer'

const hand = Caveat({ subsets:['latin'], variable:'--font-hand' })
const serif = Playfair_Display({ subsets:['latin'], variable:'--font-serif' })

export const metadata: Metadata = { title:'For Parvathy 💌', description:'A little surprise' }
export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#ffe4ec' }

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hand.variable} ${serif.variable}`}>
        <CustomCursor />
        <MusicPlayer />
        {children}
      </body>
    </html>
  )
}
