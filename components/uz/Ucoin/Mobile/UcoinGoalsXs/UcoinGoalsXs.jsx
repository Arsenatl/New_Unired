import Image from 'next/image'
import img from '@/public/ucoinimg.png'

export default function UcoinGoalsXs() {
    return (
        <section className='container'>
            <h2 className='text-20-xs'>“Ucoin”дан қаерда фойдаланиш мумкин?</h2>
            <p className="text-14-xs my-5">Айни пайтда Ўзбекистондан Қозоғистон,
Россия, Туркия, Озарбайжон,
Арманистон ва Тожикистонга бемалол
пул жўнатиш мумкин.</p>
            <Image
                src={img}
                alt='image'
                />
    </section>
    )
}
