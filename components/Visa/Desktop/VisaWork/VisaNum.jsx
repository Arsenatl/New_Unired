import { visaNumLink } from "./visaNumLink"

async function getData() {
    const res = visaNumLink
    return res
}

export default async function VisaNum() {
    const data = await getData()

    return (
        <div className="container">
            <div className="row">
                <div className="grid grid-cols-4 gap-[30px]">
                    {
                        data.map((element, value) => {
                            return (
                                <div>
                                    <div className='w-8 h-8 bg-[#F4494966] flex justify-center items-center rounded-[50%]'>
                                        <p className='text-18 font-semibold text-[#F44949]'>{element.number}</p>
                                    </div>
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
        </div>
    )
}