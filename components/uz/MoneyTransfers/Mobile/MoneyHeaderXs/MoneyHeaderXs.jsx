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
          <h2 className="text-16-xs text-[#F44949]">Пул ўтказмалари</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5">Россиядан Узбекистонга <br />
            пул жунатиш
          </h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Unired нафақат Ўзбекистон ичида балки ундан
ташқарида ҳам қулай пул ўтказмаларини тақдим этади.
Мураккаб процедураларга вақт сарфламанг, молиявий
операцияларда ишончли ҳамкорингиз — “Unired”ни танланг!</p>
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
