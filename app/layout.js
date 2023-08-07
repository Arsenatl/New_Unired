import './globals.css'
import localFont from 'next/font/local'
import NavLink from '@/components/Nav/Desktop/NavLink'
import Footer from '@/components/Footer/Desktop/Footer'
import FooterLinks from '@/components/Footer/Desktop/FooterLinks'
import Nav from '@/components/Nav/Desktop/Nav'
import NavXs from '@/components/Nav/Mobile/NavXs'
import FooterXs from '@/components/Footer/Mobile/FooterXs'

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
        <Nav>
          <NavLink />
        </Nav>
        <div className='xs:block hidden'>
          <NavXs />
        </div>
        {children}
        <Footer>
          <FooterLinks />
        </Footer>
        <div className="hidden xs:block">
          <FooterXs />
        </div>
      </body>
    </html>
  )
}
