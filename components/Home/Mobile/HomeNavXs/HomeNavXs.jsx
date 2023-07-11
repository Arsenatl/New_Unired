'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import HomeNavXsMenu from './HomeNavXsMenu'

export default function HomeNavXs() {
    const [menu, setMenu] = useState(false)
    const handleMenu = (e) => {
        setMenu(e)
    }
    return (
        <nav className='pt-5 '>
            <div className='container flex items-center justify-between'>
                <Link
                    href={'/'}
                    className='style-italic-xs font-bold text-white uppercase'>
                    Unired
                </Link>
                <button onClick={() => handleMenu(true)}>
                    <Image
                        src={'/menu.svg'}
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
