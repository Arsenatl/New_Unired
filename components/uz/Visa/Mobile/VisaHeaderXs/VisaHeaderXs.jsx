import Image from "next/image";
import MoneyHeaderBtnXs from "./VisaHeaderBtnXs";
import img from '@/public/visaImg.svg'

export default function VisaHeaderXs() {
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
          <h2 className="text-16-xs text-[#F44949]">Visa карталар</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5">
            <span className="text-[#F44949]">Visa </span>
            виртуал ва <br />
            классик карталари
          </h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">“Unired”да Виртуал ва Классик Visa карталар билан
имкониятлар дунёсини очинг. Қаерда бўлишингиздан
қатъи назар, тўловларнинг хавфсизлиги ва қулайлигига
ишонч ҳосил қилинг.</p>
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
