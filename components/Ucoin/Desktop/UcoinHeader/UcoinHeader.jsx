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
              <h1 className="text-64"><span className='text-[#F44949]'>Электронные <br /> деньги</span> удобны в <br /> любое время</h1>
              <p className="text-18 mt-6 mb-5">Электронные деньги Ucoin - это ваша свобода выбора <br /> и гибкости в финансовых операциях. Забудьте о <br /> неудобных наличных, переходите на новый уровень <br /> комфорта и безопасности с Ucoin.
              </p>
              <ButtonUcoinHeader/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
