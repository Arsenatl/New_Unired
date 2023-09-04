'use client'
import { usePathname } from 'next/navigation'

export default async function NavRu({children, product}) {
  const pathname = usePathname ()

  return (
    <nav className={`${pathname === '/' || pathname === '/ru' ? 'hidden' : 'block'} xs:hidden`}>
      {children}
    </nav>
  )
}
