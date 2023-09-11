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
                            <h2 className='text-40'>Готовы приступить к работе?</h2>
                            <p className='text-20 mt-7 mb-5'>Ознакомьтесь с платежами <span className='text-[#F44949] font-semibold'>Unired</span> или мгновенно создайте учетную запись, начните  отправлять и принимать  денежные переводы.</p>
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
                                <h3 className='before:content-[" "] before:block before:h-4 before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center text-16 mt-7'>Быстрота операции</h3>
                                <p className='text-16 text-[#455464] font-normal tracking-normal mt-10px mb-3'>С нами у вас быстрые операции и надежная платформа, обеспечивающая моментальные денежные переводы и удобные платежи.</p>
                                {/* <ButtonHomeMore/> */}
                            </div>
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={'/briefcase.svg'}
                                    alt='bag'
                                />
                                <h3 className='before:content-[" "] before:block before:h-4 before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center text-16 mt-7'>Для сотрудничества</h3>
                                <p className='text-16 text-[#455464] font-normal tracking-normal mt-10px'>Присоединяйтесь к нам и упростите свои финансовые операции уже сегодня!</p> <br /> <br />
                                {/* <ButtonHomeMore/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
