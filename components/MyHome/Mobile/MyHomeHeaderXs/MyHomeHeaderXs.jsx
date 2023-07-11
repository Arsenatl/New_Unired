import Image from "next/image";
import img from '@/public/myhouseImg.svg'
import MyHomeHeaderBtnXs from "./MyHomeHeaderBtnXs";

export default function MyHomeHeaderXs() {
  return (
    <header className='mt-8'>
      <div className="container">
        <div className='pl-5 flex-center gap-4'>
          <Image
            width={32}
            height={32}
            src={'/note-2.svg'}
            alt="case"
          />
          <h2 className="text-16-xs text-[#F44949]">Мой дом</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5 text-[#F44949]">Плати за домашние <br /> услуги быстро <br /> онлайн</h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Lorem ipsum skdb lhiiwbfbhjb wifirwig gapi ie igt
            kbrjtj lke biapi pigu iq pei pie inekjbnk a enpi . aeekinetbka pe ggtrrjbgjebjgbjdbjbvdbeenknkfjnknwknk ehgiheig</p>
          <MyHomeHeaderBtnXs />

        </div>
      </div>
      <div>
        <Image
          src={img}
          alt="phone"
          className="w-full"
        />
      </div>
    </header>
  )
}
