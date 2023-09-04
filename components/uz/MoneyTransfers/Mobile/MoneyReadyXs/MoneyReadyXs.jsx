import MoneyReadyBtnXs from './MoneyReadyBtnXs'
import imgOne from '@/public/note-2.svg'
import imgTwo from '@/public/briefcase.svg'
import Image from 'next/image'

export default function MoneyReadyXs() {
    return (
        <section className='container mb-12'>
            <h2 className="text-24-xs">Ишга киришишга тайёрмисиз?</h2>
            <p className="text-14-xs font-normal my-5">Рўйхатдан ўтинг, пул ўтказмаларини юбориш ва қабул қилишни бошланг.</p>
            <MoneyReadyBtnXs />
            <div className='flex flex-col gap-10 pr-24 mt-10'>
                <div>
                    <Image
                        src={imgOne}
                        alt='icon'
                        className='ml-[22px]'
                    />
                    <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>Амаллар тезлиги</h2>
                    <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">Биз билан тез ўтказмаларни амалга оширинг ва ишончли платформага эга бўлинг.</p>
                </div>
                <div>
                    <Image
                        src={imgTwo}
                        alt='icon'
                        className='ml-[22px]'
                    />
                    <h2 className='flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr- before:mr-5 mt-4 mb-10px text-16-xs tracking-normal text-[#1C1C1C] font-bold'>Ҳамкорлик учун</h2>
                    <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">Бизга қўшилинг ва молиявий операцияларингизни бугунданоқ соддалаштиринг!</p>
                </div>
            </div>
        </section>
    )
}

