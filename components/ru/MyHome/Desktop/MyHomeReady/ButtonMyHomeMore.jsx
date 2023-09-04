import Image from 'next/image'
import React from 'react'

export default function ButtonMyHomeMore() {
    return (
        <div className='flex-center gap-2 cursor-pointer mt-5'>
            <p>Узнать подробнее</p>
            <Image
                width={24}
                height={24}
                src={'/arrow-right-black.svg'}
                alt='arrow-right'
            />
        </div>
    )
}
