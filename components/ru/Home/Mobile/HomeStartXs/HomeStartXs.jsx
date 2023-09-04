import Image from "next/image";
import HomeStartBtnXs from "./HomeStartBtnXs";
import HomeStartMoreBtnXs from "./HomeStartMoreBtnXs";

export default function HomeStartXs() {
  return (
    <section className="container mb-14">
      <h2 className="text-24-xs">Готовы приступить к работе?</h2>
      <p className="text-14-xs leading-[180%] font-normal mt-10px mb-5">Ознакомьтесь с платежами<span className="text-[#F44949]">Unired</span>или мгновенно создайте учетную запись, начните  отправлять и принимать  денежные переводы.</p>
      <HomeStartBtnXs />
      <div className="flex flex-col gap-[65px] mt-12">
        <div>
          <Image
            src={'/briefcase.svg'}
            width={48}
            height={48}
            alt="icon"
          />
          <div className="border-transparent border-l-[#F44949] border-[2px] pl-5 mt-6 mb-2">
            <h3 className="text-16-xs text-[#1C1C1C] tracking-normal font-bold">Быстрота операции</h3>
          </div>
          <div className="ml-[22px]">
            <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">С нами у вас быстрые операции <br /> и надежная платформа, обеспечивающая <br /> моментальные денежные переводы <br /> и удобные платежи.</p>
            <HomeStartMoreBtnXs />
          </div>
        </div>
        <div>
          <Image
            src={'/briefcase.svg'}
            width={48}
            height={48}
            alt="icon"
          />
          <div className="border-transparent border-l-[#F44949] border-[2px] pl-5 mt-6 mb-2">
            <h3 className="text-16-xs text-[#1C1C1C] tracking-normal font-bold">Для сотрудничества</h3>
          </div>
          <div className="ml-[22px]">
            <p className="text-14-xs tracking-normal font-normal mb-6 ml-[22px]">Присоединяйтесь к нам и упростите <br />свои финансовые операции уже сегодня!</p>
            <HomeStartMoreBtnXs />
          </div>
        </div>
      </div>
    </section>
  )
}
