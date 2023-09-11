import Image from "next/image";
import Link from "next/link";


export default function ButtonHomeFinances({logo,span}) {
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
            <span className='font-bold'>
                {span}
            </span>
            {logo}
        </button>
        </Link>
    )
}
