import Image from "next/image";
import img from '@/public/ucoinImg.svg'
import UcoinHeaderBtnXs from "./UcoinHeaderBtnXs";

export default function UcoinHeaderXs() {
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
          <h2 className="text-16-xs text-[#F44949]">Ucoin</h2>
        </div>
        <div>
          <h1 className="text-36-xs my-5"><span className="text-[#F44949]">Электрон пул </span>ҳар қандай вақтда
қулай</h1>
          <p className="text-13-xs font-light tracking-[0.52px] text-[#455464]">Ucoin электрон пули - бу сизнинг танлов эркинлигингиз
ва молиявий операцияларда мослашувчан ёрдамчингиз.
Ноқулай нақд пулни унутинг, Ucoin билан қулайлик ва
хавфсизликнинг янги босқичига ўтинг.</p>
          <UcoinHeaderBtnXs />

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
