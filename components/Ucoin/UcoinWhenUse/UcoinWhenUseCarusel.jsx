'use client'

import { Carousel } from "flowbite-react"
import Image from "next/image"

export default function UcoinWhenUseCarusel() {
    return (
        <div className="w-[450px] h-[450px]">

        <Carousel>
            <Image
                width={450}
                height={450}
                src={'/Rectangle 1631.png'}
                alt="photo"
                />
            <Image
                width={450}
                height={450}
                src={'/Rectangle 1631.png'}
                alt="photo"
                />
            <Image
                width={450}
                height={450}
                src={'/Rectangle 1631.png'}
                alt="photo"
                />
            <Image
                width={450}
                height={450}
                src={'/Rectangle 1631.png'}
                alt="photo"
            />
        </Carousel>
                </div>
    )
}
