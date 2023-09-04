'use client'

import { usePathname } from 'next/navigation'

export default function FooterRu({children}) {
  const pathname = usePathname()
  return (
    <footer className={`${pathname === '/ru' ? 'hidden' : 'block'} ${pathname === '/money_transfers' || pathname === '/payments' ? 'bg-[#F7F9FC]' : 'bg-transparent '} pt-24 pb-48 xs:hidden`}>
      {children}
    </footer>
  )
}
