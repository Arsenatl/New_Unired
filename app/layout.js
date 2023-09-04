import './globals.css'
import localFont from 'next/font/local'
import NavMain from '@/components/Nav/NavMain'
import FooterMain from '@/components/Footer/FooterMain'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: [
    {
      path: '../SF Pro display/SF Pro Display Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Heavy.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../SF Pro display/SF Pro Display Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../SF Pro display/FuturaBoldItalicBT.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <NavMain/>
        {children}
        <FooterMain/>
      </body>
    </html>
  )
}
