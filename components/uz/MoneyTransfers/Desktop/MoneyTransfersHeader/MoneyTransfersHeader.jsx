import Image from "next/image"
import ButtonMoneyHeader from "./ButtonMoneyHeader"

function MoneyTransfersHeader() {
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

          <h3 className="text-18 text-[#F44949] font-semibold tracking-normal">Пул ўтказмалари</h3>
        </div>
      </div>
      <header className="bg-moneyTRImg bg-set mt-[21px] pt-[80px] pb-[660px]  mb-36">
        <div className="container">
          <div className="row">
            <div>
              <h1 className="text-64">Россиядан Узбекистонга <br /> пул жунатиш

              </h1>
              {/* <span className="text-[36px] leading-10 font-medium text-[#F44949]">и обратно</span> */}
              <p className="text-18 mt-6 mb-5">Unired нафақат Ўзбекистон ичида балки ундан <br /> ташқарида ҳам қулай пул ўтказмаларини тақдим этади. <br /> Мураккаб процедураларга вақт сарфламанг, молиявий <br /> операцияларда ишончли ҳамкорингиз — “Unired”ни танланг!</p>
              <ButtonMoneyHeader/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MoneyTransfersHeader