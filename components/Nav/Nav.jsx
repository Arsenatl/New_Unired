'use client'

import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

export default async function Nav() {
  const pathname = usePathname ()

  return (
    <nav className={pathname === '/' ? 'hidden' : 'block'}>
      <NavLink/>
    </nav>
  )
}
