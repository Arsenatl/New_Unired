import Image from 'next/image'
import React from 'react'

export default function PaymentsServicesXs() {
    return (
        <section className='container'>
            <h2 className='text-13-xs'>Қандай хизматлар учун тўласа бўлади?</h2>
            <h3 className="text-24-xs my-5"> <span className="text-[#F44949]">Unired Mobile</span> билан ўнлаб хизматларга тўлов</h3>
            <p className="text-14-xs">Unired Mobile билан сиз Ўзбекистонда турли хизматларга тўлов қилиш имкониятига эга бўласиз. Коммунал хизматлар, мобил алоқа, таксилар, интернет, нотариал хизматлар, ўйинлар ва бошқа кўп нарсалар учун тўловни бизнинг қулай иловамиз орқали амалга оширинг.</p>
            <div className="wrapper mt-36">
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
        </section>
    )
}
