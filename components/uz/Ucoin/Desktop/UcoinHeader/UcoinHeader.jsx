import Image from 'next/image'
import ButtonUcoinHeader from './ButtonUcoinHeader'

export default function UcoinHeader() {
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

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Ucoin</h3>
        </div>
      </div>
      <header className="bg-ucoinHeader bg-set pt-[90px] pb-[500px]">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64"><span className='text-[#F44949]'>Электрон пул </span> <br /> ҳар қандай вақтда <br /> қулай </h1>
              <p className="text-18 mt-6 mb-5">Ucoin электрон пули - бу сизнинг танлов эркинлигингиз <br /> ва молиявий операцияларда мослашувчан ёрдамчингиз. <br />Ноқулай нақд пулни унутинг, Ucoin билан қулайлик ва <br /> хавфсизликнинг янги босқичига ўтинг.</p>
              <ButtonUcoinHeader />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
