import Image from 'next/image'
import ButtonHomeStart from './ButtonHomeStart'
// import ButtonHomeMore from './ButtonHomeMore'

export default function HomeStart() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row grid grid-cols-2 gap-28">
                        <div>
                            <h2 className='text-40'>Ишга киришишга тайёрмисиз?</h2>
                            <p className='text-20 mt-7 mb-5'>Рўйхатдан ўтинг, пул ўтказмаларини юбориш ва қабул қилишни бошланг.</p>
                            <ButtonHomeStart/>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={'/briefcase.svg'}
                                    alt='bag'
                                />
                                <h3 className='before:content-[" "] before:block before:h-4 before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center text-16 mt-7'>Операциялар тезлиги </h3>
                                <p className='text-16 text-[#455464] font-normal tracking-normal mt-10px mb-3'>Биз билан тез ўтказмаларни амалга оширинг ва ишончли платформага эга бўлинг.</p>
                                {/* <ButtonHomeMore/> */}
                            </div>
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={'/briefcase.svg'}
                                    alt='bag'
                                />
                                <h3 className='before:content-[" "] before:block before:h-4 before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center text-16 mt-7'>Ҳамкорлик учун</h3>
                                <p className='text-16 text-[#455464] font-normal tracking-normal mt-10px'>Бизга қўшилинг ва молиявий операцияларингизни бугунданоқ соддалаштиринг!</p> 
                                {/* <ButtonHomeMore/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}








