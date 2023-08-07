import imgOne from '@/public/note-2.svg'
import imgTwo from '@/public/briefcase.svg'
import Image from 'next/image'
import PaymentsReadyBtnXs from './PaymentsReadyBtnXs'

export default function PaymentsReadyXs() {
    return (
        <section className='container mb-12'>
            <h2 className="text-24-xs">Готовы приступить к работе?</h2>
            <p className="text-14-xs font-normal my-5">Ознакомьтесь с платежами <span className="text-[#F44949]">Unired</span> или мгновенно создайте учетную запись, начните  отправлять и принимать  денежные переводы.</p>
            <PaymentsReadyBtnXs />
            <div className='flex flex-col gap-10 pr-24 mt-10'>
                <div>
                    <Image
                        src={imgOne}
                        alt='icon'
                        className='ml-[22px]'
                    />
                    <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>Удобство в использовании</h2>
                    <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">С нами у вас быстрые операции <br /> и надежная платформа, обеспечивающая <br /> моментальные денежные переводы <br /> и удобные платежи.</p>
                </div>
                <div>
                    <Image
                        src={imgTwo}
                        alt='icon'
                        className='ml-[22px]'
                    />
                    <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>Быстрота операции</h2>
                    <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">Присоединяйтесь к нам и упростите <br />свои финансовые операции уже сегодня!</p>
                </div>
            </div>
        </section>
    )
}

