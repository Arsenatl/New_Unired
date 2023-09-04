import Image from 'next/image'
import React from 'react'

export default function ButtonMyHomeHeader() {
  return (
    <button
      className="btn-16 flex-center gap-2">
      <Image
        width={24}
        height={24}
        src={'/box.svg'}
        alt='cube'
      />
      Хизматлар учун
      <span className='font-bold'>
        тўлов
      </span>
    </button>
  )
}
