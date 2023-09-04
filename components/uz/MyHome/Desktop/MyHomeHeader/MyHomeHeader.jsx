import Image from 'next/image'
import ButtonMyHomeHeader from './ButtonMyHomeHeader'

export default function MyHomeHeader() {
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

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Менинг уйим
          </h3>
        </div>
      </div>
      <header className="bg-myhomeHeader bg-set pt-[90px] pb-[280px]">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64 text-[#F44949]">Уй хизматлари учун <br /> тезкорлик билан <br /> онлайн тўланг
              </h1>
              <p className="text-18 mt-6 mb-5">Иловани очинг, керакли хизматни танланг - коммунал хизматлар, <br /> интернет, уяли алоқа ва бошқалар, - учун нечта кликлар <br /> орқали онлайн тўловни амалга оширинг.
              </p>
              <ButtonMyHomeHeader />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
