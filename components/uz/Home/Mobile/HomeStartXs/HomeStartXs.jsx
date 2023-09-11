import Image from "next/image";
import HomeStartBtnXs from "./HomeStartBtnXs";
// import HomeStartMoreBtnXs from "./HomeStartMoreBtnXs";

export default function HomeStartXs() {
  return (
    <section className="container mb-14">
      <h2 className="text-24-xs">Ишга киришишга тайёрмисиз?</h2>
      <p className="text-14-xs leading-[180%] font-normal mt-10px mb-5">Рўйхатдан ўтинг, пул ўтказмаларини юбориш ва қабул қилишни бошланг.</p>
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
            <h3 className="text-16-xs text-[#1C1C1C] tracking-normal font-bold">Операциялар тезлиги</h3>
          </div>
          <div className="ml-[12px]">
            <p className="text-14-xs tracking-normal font-normal mb-6 ml-[12px]">Биз билан тез ўтказмаларни<br /> амалга оширинг ва ишончли<br /> платформага эга бўлинг.</p>
            {/* <HomeStartMoreBtnXs /> */}
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
            <h3 className="text-16-xs text-[#1C1C1C] tracking-normal font-bold">Ҳамкорлик учун</h3>
          </div>
          <div className="ml-[12px]">
            <p className="text-14-xs tracking-normal font-normal mb-6 ml-[12px]">Бизга қўшилинг ва молиявий <br />операцияларингизни <br />бугунданоқ соддалаштиринг!</p>
            {/* <HomeStartMoreBtnXs /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
