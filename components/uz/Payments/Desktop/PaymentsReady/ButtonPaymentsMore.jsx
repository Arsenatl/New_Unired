import Image from 'next/image'
import React from 'react'

export default function ButtonPaymentsMore() {
    return (
        <div className='flex-center gap-2 cursor-pointer mt-5'>
            <p>Батафсил маълумот</p>
            <Image
                width={24}
                height={24}
                src={'/arrow-right-black.svg'}
                alt='arrow-right'
            />
        </div>
    )
}
