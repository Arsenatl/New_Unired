'use client'
import React, { useState } from "react"
import { MoneyCountriesLinksXs, MoneyCountriesListLinksXs } from "./MoneyCountriesLinksXs"
import Image from "next/image"

export default function MoneyCountriesListXs() {
  const [btnId, setBtnId] = useState(1)
  const handleBtn = (e) => {
    setBtnId(e)
  }

  const dataCountriesList = MoneyCountriesListLinksXs?.find(element => element.id === btnId)
  return (
    <section className='container mt-10 mb-20'>
      <h2 className="text-16-xs text-[#EF2B23] leading-[150%] font-bold tracking-[0.16px]">Мамлакатлар рўйхати</h2>
      <div className="flex-center gap-5 mt-5 mb-10">
        {
          MoneyCountriesLinksXs?.map((element, value) => {
            return (
              <button key={value} onClick={() => handleBtn(element.id)} className={`btn-14-xs py-2 ${btnId === element.id ? 'text-white bg-[#F44949]' : 'text-[#333] bg-[#F7F9FC]'}`}>{element.text}</button>
            )
          })
        }
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        {
          dataCountriesList?.content?.map((element, value) => {
            return (
              <div key={value} className="flex-center gap-5">
                <Image
                  src={element.img}
                  alt="img"
                />
                <h3 className="text-18-xs leading-[150%] font-semibold tracking-[0.18px]">{element.text}</h3>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
