import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ButtonPaymentsHeader() {
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
      Ҳозироқ
      <span className='font-bold'>
        тўланг
      </span>
    </button>
    </Link>
  )
}
