import Image from 'next/image'
import React from 'react'

export default function ButtonPaymentsHeader() {
  return (
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
  )
}
