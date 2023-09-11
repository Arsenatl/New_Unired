import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ButtonMyHomeHeader() {
  return (
    <Link target="blank" href={'http://onelink.to/unired_mobile'}>

    <button
            className="btn-16 flex-center gap-2">
            <Image
                width={24}
                height={24}
                src={'/box.svg'}
                alt='cube'
            />
            Пользуетесь нашими
            <span className='font-bold'>
                сервисами
            </span>
        </button>
        </Link>
  )
}
