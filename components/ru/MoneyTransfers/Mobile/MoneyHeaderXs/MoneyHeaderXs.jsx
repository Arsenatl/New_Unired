import Image from "next/image";
import MoneyHeaderBtnXs from "./MoneyHeaderBtnXs";
import img from '@/public/Group 2644.svg'

export default function MoneyHeaderXs() {
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
          <h2 className="text-16-xs text-[#F44949]">Денежные переводы</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5">Денежные <br /> переводы из <br /> Узбекистана <br />
            <span className="text-[#F44949]">и обратно</span></h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Unired предоставляет удобные денежные переводы внутри Узбекистана и за ее пределы. Не тратьте время на сложные процедуры, выбирайте Unired - ваш надежный партнер в финансовых операциях!</p>
          <MoneyHeaderBtnXs />

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
