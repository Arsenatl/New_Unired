import Image from 'next/image'
import React from 'react'

export default function PaymentsServices() {
    return (
        <section className="container mt-40">
            <div className="row">
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Қандай хизматлар учун тўласа бўлади?</h2>
            </div>
            <div className="row grid grid-cols-2 gap-x-6 mt-6">
                <div>
                    <h1 className='text-36 mt-7 mb-5'><span className='text-[#F44949]'>Unired mobile </span> билан ўнлаб хизматларга тўлов</h1>
                    <p className='text-18 font-light'>Unired Mobile билан сиз Ўзбекистонда турли хизматларга тўлов қилиш имкониятига эга бўласиз. Коммунал хизматлар, мобил алоқа, таксилар, интернет, нотариал хизматлар, ўйинлар ва бошқа кўп нарсалар учун тўловни бизнинг қулай иловамиз орқали амалга оширинг.</p>
                </div>

                <div className="wrapper mt-24">
                    <div className="outer flex flex-col items-center gap-10">
                        <div style={{ '--delay': '-1' }} className="card flex-between gap-6 py-4 px-11 rounded bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                            <Image
                                width={48}
                                height={48}
                                src={'/note-2.svg'}
                                alt='list'
                            />
                            <p className='text-16 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, Ucell, Perfectum, Humans</p>
                        </div>
                        <div style={{ '--delay': '0' }} className="card flex-between gap-5 py-4 pl-4 rounded pr-16 w-max bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2-blue.svg'}
                                alt='list'
                            />
                            <p className='text-[14px] leading-5 tracking-wider text-[#1C1C1C] opacity-50 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, <br /> Ucell, Perfectum, Humans</p>
                        </div>
                        <div style={{ '--delay': '1' }} className="card flex-between gap-6 py-4 px-11 rounded bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                            <Image
                                width={48}
                                height={48}
                                src={'/note-2.svg'}
                                alt='list'
                            />
                            <p className='text-16 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, Ucell, Perfectum, Humans</p>
                        </div>
                        <div style={{ '--delay': '2' }} className="card flex-between gap-5 py-4 pl-4 rounded pr-16 w-max bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2-blue.svg'}
                                alt='list'
                            />
                            <p className='text-[14px] leading-5 tracking-wider text-[#1C1C1C] opacity-50 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, <br /> Ucell, Perfectum, Humans</p>
                        </div>
                        <div style={{ '--delay': '2' }} className="card flex-between gap-5 py-4 pl-4 rounded pr-16 w-max bg-white shadow-[0px_20px_40px_4px_rgba(0,0,0,0.1)]">
                            <Image
                                width={36}
                                height={36}
                                src={'/note-2-blue.svg'}
                                alt='list'
                            />
                            <p className='text-[14px] leading-5 tracking-wider text-[#1C1C1C] opacity-50 font-normal'>Mobil operatorlarga to’lovlar: Mobiuz, Uzmobile, Beeline, <br /> Ucell, Perfectum, Humans</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}




