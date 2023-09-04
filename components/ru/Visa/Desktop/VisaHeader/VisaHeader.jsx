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

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Карты Visa</h3>
        </div>
      </div>
      <header className="bg-visaHeader bg-set  pt-[50px] pb-[300px]">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64">Виртуальные и <br /> классические <br /> карты <span className='text-[#F44949]'>Visa</span></h1>
              <p className="text-18 mt-6 mb-5">Откройте мир возможностей с нашими Виртуальными <br /> и Классическими картами Visa от Unired. Будьте уверены <br />в безопасности и удобстве платежей, независимо от того,<br /> где вы находитесь.</p>
              <ButtonVisaHeader/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
