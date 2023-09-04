import Image from "next/image";
import img from '@/public/paymentsImg.svg'
import PaymentsHeaderBtnXs from "./PaymentsHeaderBtnXs";

export default function PaymentsHeaderXs() {
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
          <h2 className="text-16-xs text-[#F44949]">Тўловлар</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5">Ўзбекистондаги <br />
хизматлар учун <br />
Россиядан тўланг</h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Энди сиз Unired иловаси ёрдамида Ўзбекистондаги
хизматлар учун тўғридан-тўғри Россиядан туриб
тўлашингиз мумкин. Ҳеч қандай мураккаб процедуралар
ва комиссиялар йўқ - шунчаки тез ва қулай тўлов!</p>
          <PaymentsHeaderBtnXs />

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
