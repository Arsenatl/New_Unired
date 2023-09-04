import Image from 'next/image'
import React from 'react'

export default function MoneyHeaderBtnXs() {
    return (
        <button
            className='btn-full mt-5 mb-10'
        >
            <Image
                src={'/box.svg'}
                width={24}
                height={24}
                alt='box'
            />
            Ҳозироқ
ўтказинг
        </button>
    )
}
