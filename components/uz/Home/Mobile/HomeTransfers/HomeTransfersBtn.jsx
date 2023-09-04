'use client'

import Image from "next/image"

export default function HomeTransfersBtn({ img, text }) {
    return (
        <button
            className="btn-full my-5"
        >
            <Image
                src={img}
                alt="icon"
            />
            <p>{text}</p>
        </button>
    )
}
