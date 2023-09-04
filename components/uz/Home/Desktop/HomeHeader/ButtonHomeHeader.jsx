'use client'
import Image from 'next/image'
import img1 from '@/public/download-on-the-app-store-apple logo.svg'
import img2 from '@/public/google-play-badge logo (1).svg'

export default function ButtonHomeHeader() {
    return (
        <div className='flex gap-7'>
            <Image
                src={img1}
                alt='foto'
            />
            <Image
                src={img2}
                alt='foto'
            />
        </div>
    )
}
