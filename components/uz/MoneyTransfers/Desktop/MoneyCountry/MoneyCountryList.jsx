'use client'
import { useState } from "react"
import { MoneyCountryLink } from "./moneyCountryLink"
import { MoneyCountryListLink } from "./moneyCountryLink"


export default function MoneyCountryList() {
    const [btnId, setBtnId] = useState(1)
    const handleBtn = (e) => {
        setBtnId(e)
    }

    const dataCountryList = MoneyCountryListLink?.find(element => element.id === btnId)
    console.log(dataCountryList);
    return (
        <div className='container mt-16 mb-36'>
            <div className="row">
                <div className='grid grid-cols-[1fr_2fr] items-center'>
                    <h3 className='text-18 tracking-wide font-bold text-[#EF2B23]'>Мамлакатлар рўйхати</h3>
                    <div className='flex-center gap-7'>
                        {
                            MoneyCountryLink.map((element, value) => {
                                return (
                                    <button key={value} onClick={() => handleBtn(element.id)} className={`py-4 px-12 text-16 ${element.id === btnId ? 'text-white bg-[#F44949]' : 'text-[#333333] bg-[#F7F9FC]'} tracking-wide rounded-[40px] shadow-[0px_3px_10px_rgba(241,79,73,0.2)]`}>
                                        {element.text}
                                    </button>
                                )
                            })
                        }
                        {/* <button className='py-4 px-12 text-16 text-white tracking-wide rounded-[40px] bg-[#F44949] shadow-[0px_3px_10px_rgba(241,79,73,0.2)]'>
                            СНГ
                        </button>
                        <button className='py-4 px-12 text-16 text-[#333333] tracking-wide rounded-[40px] bg-[#F7F9FC] shadow-[0px_3px_10px_rgba(241,79,73,0.2)]'>
                            Европа
                        </button> */}
                    </div>
                </div>
                <div className='flex-between mt-16'>
                    {
                        dataCountryList?.content.map((element, link) => {
                            return (
                                <div key={link} className="flex-center gap-5">
                                    <div className="w-10 h-10 rounded-[50%] bg-[#D9D9D9]"></div>
                                    <h2 className="text-24 font-semibold text-[#1C1C1C] tracking-wide ">{element.text}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
