'use client'

import Image from "next/image"
import { useState } from "react"
import NavDownDrop from "./NavDownDrop"

export default function NavDown() {
    const [down, setDown] = useState('h-0')
    const [rotate, setRotate] = useState('rotate-180')
    const [blur, setBlur] = useState('pointer-events-none')
    const handleNav = (e) => {
        console.log(e);
        e ? (setDown('h-[256px]'), setRotate('rotate-0'), setBlur('backdrop-blur')) : (setDown('h-0'), setRotate('rotate-180'), setBlur('pointer-events-none'))
        // e ? document.body.style.filter = 'blur(4px)' : document.body.style.filter = 'blur(0px)'
    }
    return (
        <>
            <div>
                <div onMouseEnter={() => handleNav(true)} className="flex-center gap-1 overflow-hidden cursor-pointer">
                    <p className='text-[16px] leading-[19px] font-semibold text-[#1C1C1C]'>Маҳсулотлар</p>
                    <Image
                        width={16}
                        height={16}
                        src={'/arrow-down-black.svg'}
                        alt='arrow-down'
                        className={`${rotate} transition-all duration-700`}
                    />
                </div>
                <div onMouseLeave={() => handleNav(false)}>
                    <NavDownDrop props={down} />
                </div>
            </div>
            <div onClick={() => handleNav(false)} className={`fixed top-0 left-0 w-full h-[100vh] duration-1000 z-20 ${blur}`}></div >
        </>

    )
}
