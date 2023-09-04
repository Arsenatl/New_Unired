import React from 'react'
import ButtonPaymentsHeader from './ButtonPaymentsHeader'
import Image from 'next/image'

export default function PaymentsHeader() {
  return (
    <>
      <div className="container">
        <div
          className="p-[10px] row flex-center gap-4 rounded-md mt-12 mb-5">
          <Image
            width={36}
            height={36}
            src={'/note-2.svg'}
            alt="case"
          />

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Платежи</h3>
        </div>
      </div>
      <header className="bg-paymentsHeader bg-set pt-[73px] pb-[420px]">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64">Оплачивайте услуги <br /> в Узбекистане из <br /> России
              </h1>
              <p className="text-18 mt-6 mb-5">Теперь вы можете легко оплачивать услуги в Узбекистане  прямо из России <br /> с помощью нашего приложения Unired. Никаких сложных процедур <br /> и комиссий - просто быстрая и удобная оплата для вашего комфорта!</p>
              <ButtonPaymentsHeader/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
