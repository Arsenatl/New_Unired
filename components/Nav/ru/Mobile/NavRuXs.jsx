'use client'

import HomeNavXsMenu from "@/components/ru/Home/Mobile/HomeNavXs/HomeNavXsMenu"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavRuXs() {
    const [menu, setMenu] = useState(false)
    const pathname = usePathname()
    const handleMenu = (e) => {
        setMenu(e)
    }
    useEffect(() => {
        setMenu(false)
    }, [pathname])

    return (
        <nav className={`${pathname === '/ru' ? 'hidden' : 'block'} pt-5`}>
            <div className='container flex items-center justify-between'>
                <Link
                    href={'/ru'}
                    className='style-italic-xs font-bold text-[#F44949] uppercase'>
                    Unired
                </Link>
                <button onClick={() => handleMenu(true)}>
                    <Image
                        src={'/menuXs.svg'}
                        alt='menu button'
                        width={44}
                        height={24}

                    />
                </button>
                <HomeNavXsMenu props={menu} handleMenu={handleMenu} />
            </div>
        </nav>
    )
}
