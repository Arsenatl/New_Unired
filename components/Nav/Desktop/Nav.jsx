'use client'
import { usePathname } from 'next/navigation'

export default async function Nav({children}) {
  const pathname = usePathname ()

  return (
    <nav className={`${pathname === '/' ? 'hidden' : 'block'} xs:hidden`}>
      {children}
    </nav>
  )
}
