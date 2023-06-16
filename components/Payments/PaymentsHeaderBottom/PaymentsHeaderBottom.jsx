import Image from "next/image"
import { paymentsHeaderBottom } from './paymentsHeaderBottom'

async function getData() {
    const res = paymentsHeaderBottom

    return res
}


export default async function PaymentsHeaderBottom() {
    const data = await getData()
    return (
        <div className="container mb-44">

            <div className="row grid grid-cols-4 gap-[30px]">
                {
                    data.map((element, value) => {
                        return (
                            <div>
                                <Image
                                    width={48}
                                    height={48}
                                    src={element.img}
                                    alt='icon'
                                />
                                <h3 className='text-16 flex-center before:content-[" "] before:block before:h-5 before:w-[2px] before:bg-[#F44949] before:mr-5 before:-ml-5 mt-[30px] mb-2'>{element.logo}</h3>
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
    )
}