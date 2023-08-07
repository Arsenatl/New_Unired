'use client'
import Image from 'next/image'

export default function ButtonHomeHeader() {
    return (
        <button
            className="btn-16 flex-center gap-2">
            <Image
                width={24}
                height={24}
                src={'/box.svg'}
                alt='cube'
            />
            Воспользуйтесь нашим
            <span className='font-bold'>
                сервисом
            </span>
        </button>
    )
}
