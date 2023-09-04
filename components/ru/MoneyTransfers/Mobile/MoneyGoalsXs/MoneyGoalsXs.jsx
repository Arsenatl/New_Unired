import Image from 'next/image'
import img from '@/public/GoalsImage.png'
export default function MoneyGoalsXs() {
    return (
        <section className='container my-12'>
            <h2 className='text-20-xs'>Наши цели</h2>
            <p className='text-14-xs my-5'>Мы намерены увеличить нашу географию - количество стран которые можно отправить и получить деньги, сейчас их семь. В последние дни мы работаем над новыми возможностями</p>
            <Image
                src={img}
                alt='image'
            />
        </section>
    )
}
