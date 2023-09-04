import Image from "next/image";


export default function ButtonMoneyHeader({ logo, span }) {
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
                ўтказинг
            </span>
        </button>
    )
}
