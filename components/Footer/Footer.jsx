'use client'

import { usePathname } from 'next/navigation'
import FooterLinks from './FooterLinks'

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className={`${pathname === '/' ? 'hidden':'block'} bg-[#F7F9FC] pt-24 pb-48 mt-16`}>
      <FooterLinks />
    </footer>
  )
}
