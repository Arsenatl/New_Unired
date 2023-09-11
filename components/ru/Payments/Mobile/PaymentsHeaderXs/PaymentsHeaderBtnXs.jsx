import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PaymentsHeaderBtnXs() {
    return (
        <Link target="blank" href={'http://onelink.to/unired_mobile'}>

        <button
            className='btn-full mt-5 mb-10'
        >
            <Image
                src={'/box.svg'}
                width={24}
                height={24}
                alt='box'
            />
            Пользуетесь нашими сервисами
        </button>
        </Link>
    )
}