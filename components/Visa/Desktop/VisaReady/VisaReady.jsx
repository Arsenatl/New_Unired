import React from 'react'
import Image from 'next/image'
import ButtonVisaReady from './ButtonVisaReady'
import ButtonVisaMore from './ButtonVisaMore'

export default function VisaReady() {
    return (
        <section className='mt-32 bg-[#F7F9FC] py-32'>
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <h1 className='text-36'>Готовы приступить к работе?</h1>
                            <p className='text-18 font-light mt-5 my-5'>Ознакомьтесь с платежами Unired или мгновенно создайте учетную запись, начните  отправлять и принимать  денежные переводы.</p>
                            <ButtonVisaReady />
                        </div>
                        <div className="flex-center gap-10">
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={'/briefcase.svg'}
                                    alt='icon'
                                />
                                <h3 className='text-16 flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr-5 before:-ml-5 mt-[30px] mb-10px'>Быстрота операции</h3>
                                <p className='text-16 font-normal text-[#455464]'>
                                    Arcu dictum varius duis at. Non tellus orci ac auctorius sit amet mattis. Iaculis at erat.
                                </p>
                                <ButtonVisaMore />
                            </div>
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={'/briefcase.svg'}
                                    alt='icon'
                                />
                                <h3 className='text-16 flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr-5 before:-ml-5 mt-[30px] mb-10px'>Для сотрудничества</h3>
                                <p className='text-16 font-normal text-[#455464]'>
                                    Arcu dictum varius duis at. Non tellus orci ac auctor. Amet elit ut aliquam purus sit.
                                </p>
                                <ButtonVisaMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}