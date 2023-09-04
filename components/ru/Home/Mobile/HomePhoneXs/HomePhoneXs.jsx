import Image from 'next/image'
import img from '@/public/Group 2641.svg'

export default function HomePhoneXs() {
    return (
        <div className='my-7 flex justify-end'>
            <Image
                src={img}
                alt='phone'
            />
        </div>
    )
}
