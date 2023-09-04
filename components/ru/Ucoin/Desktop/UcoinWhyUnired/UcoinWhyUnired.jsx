import Image from 'next/image'
import { ucoinLink } from './ucoinWhyUniredLink'

async function getData() {
    const res = ucoinLink

    return res
}
export default async function UcoinWhyUnired() {
    const data = await getData()
    return (
        <section className="container -mt-24">
            <div className="row">
                <div className="grid grid-cols-4 gap-[30px] mb-32">
                    {
                        data.map((element, value) => {
                            return (
                                <div key={value}>
                                    <Image
                                        width={48}
                                        height={48}
                                        src={element.img}
                                        alt='icon'
                                    />
                                    <h3 className='text-16 flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr-5 before:-ml-5 mt-[30px] mb-10px'>{element.logo}</h3>
                                    <p className='text-16 font-normal text-[#455464]'>
                                        {element.textStart}
                                        <span className='text-[#F44949] font-semibold'>{element.span}</span>
                                        {element.textFinish}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
