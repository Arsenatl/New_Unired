import Image from 'next/image'
import img from '@/public/GoalsImage.png'
export default function MoneyGoalsXs() {
    return (
        <section className='container my-12'>
            <h2 className='text-20-xs'>Бизнинг мақсадларимиз</h2>
            <p className='text-14-xs my-5'>Биз географиямизни кенгайтирмоқчимиз –
ҳозирда пул юбориш ва қабул қилиш мумкин
бўлган мамлакатлар сони еттита.
Сўнгги кунларда биз янги имкониятлар
устида ишламоқдамиз.</p>
            <Image
                src={img}
                alt='image'
            />
        </section>
    )
}
