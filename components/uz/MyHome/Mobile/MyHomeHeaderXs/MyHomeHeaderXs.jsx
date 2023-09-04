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
          <h2 className="text-16-xs text-[#F44949]">Менинг уйим
          </h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5 text-[#F44949]">Уй хизматлари <br /> учун тезкорлик <br /> билан онлайн тўланг
</h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Иловани очинг, керакли хизматни танланг - коммунал хизматлар, интернет, уяли алоқа ва бошқалар, - учун нечта кликлар орқали онлайн тўловни амалга оширинг.
</p>
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
