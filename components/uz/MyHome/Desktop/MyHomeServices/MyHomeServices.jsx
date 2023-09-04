import Image from 'next/image'
import React from 'react'

export default function MyHomeServices() {
    return (
        <section className="container -mt-5 relative z-[-1]">
            <div className="row grid grid-cols-2 items-center gap-x-6">
                <div>
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide'>Қандай хизматларга тўлаш мумкин?</h2>
                    <h1 className='text-36 mt-7 mb-5'><span className='text-[#F44949]'>Unired Mobile</span> орқали ўнлаб хизматларга тўлаш мумкин
</h1>
                    <p className='text-18 font-light'>Unired билан сиз коммунал тўловлар, интернет, мобил алоқа, таксилар, таълим хизматлари ва бошқа кенг турдаги хизматлар учун осон ва қулай тарзда тўлашингиз мумкин. Тўловларни муаммосиз амалга ошириш орқали молиявий операцияларингизни соддалаштиринг.</p>
                </div>
                
                    
                    <div>
                        <Image
                            width={528}
                            height={455}
                            src={'/Group 2606.svg'}
                            alt='people'
                        />
                    </div>
               
            </div>
        </section>
    )
}
