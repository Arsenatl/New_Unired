import Image from 'next/image'
import ButtonVisaHeader from './ButtonVisaHeader'

export default function VisaHeader() {
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

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Visa карталар</h3>
        </div>
      </div>
      <header className="bg-visaHeader bg-set  pt-[50px] pb-[300px]">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64"><span className='text-[#F44949]'>Visa</span> Visa Virtual ва<br />  Classik карталари </h1>
              <p className="text-18 mt-6 mb-5">“Unired”да Виртуал ва Классик Visa карталар билан <br />имкониятлар дунёсини очинг. Қаерда бўлишингиздан<br /> қатъи назар, тўловларнинг хавфсизлиги ва қулайлигига <br />ишонч ҳосил қилинг.</p>
              <ButtonVisaHeader/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
