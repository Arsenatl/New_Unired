'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function HomeNavLanguageXs() {
    const [rotate, setRotate] = useState('rotate-180')
    const [down, setDown] = useState('h-0')
    const [trueF, setTrueF] = useState(true)


    const language = () => {
        setTrueF(!trueF)

        trueF ? (setDown('h-[95px]'), setRotate('rotate-0')) : (setDown('h-0'), setRotate('rotate-180'))
    }
    return (
        <div onClick={() => language(trueF)} className='relative'>

            <div className='flex-center gap-[10px] mt-12 mb-3'>
                <Image
                    src={'/global-black.svg'}
                    width={24}
                    height={24}
                    alt='icon global'
                />
                <p>Ўзбек тили</p>
                <Image
                    src={'/arrow-down-black.svg'}
                    width={16}
                    height={16}
                    alt='down icon'
                    className={`${rotate} transition-all duration-700`}
                />
            </div>
            <div  className={`${down} overflow-hidden absolute top-[42px] w-max left-[8px] transition-all duration-700`}>
                <div className="rounded-[5px] border-[1px] border-[#DBE1E3]">
                    <div className="p-[10px] border-b-[1px] border-[#DBE1E3]">
                        <Link href={'/ru'}>
                        Русский язык

                        </Link>
                    </div>
                    <div className="p-[10px]  border-[#DBE1E3]">
                        <Link href={'/'}>
                            
                            Ўзбек тили
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
