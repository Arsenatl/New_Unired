'use client'

import Image from "next/image"
import Link from "next/link"

export default function HomeTransfersBtn({ img, text }) {
    return (
        <Link target="blank" href={'http://onelink.to/unired_mobile'}>

        <button
            className="btn-full my-5"
        >
            <Image
                src={img}
                alt="icon"
            />
            <p>{text}</p>
        </button>
        </Link>
    )
}
