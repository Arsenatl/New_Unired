import UcoinHeader from "@/components/ru/Ucoin/Desktop/UcoinHeader/UcoinHeader";
import UcoinReady from "@/components/ru/Ucoin/Desktop/UcoinReady/UcoinReady";
import UcoinWhenUse from "@/components/ru/Ucoin/Desktop/UcoinWhenUse/UcoinWhenUse";
import UcoinWhyUnired from "@/components/ru/Ucoin/Desktop/UcoinWhyUnired/UcoinWhyUnired";
import UcoinWork from "@/components/ru/Ucoin/Desktop/UcoinWork/UcoinWork";
import UcoinBanksXs from "@/components/ru/Ucoin/Mobile/UcoinBanksXs/UcoinBanksXs";
import UcoinGoalsXs from "@/components/ru/Ucoin/Mobile/UcoinGoalsXs/UcoinGoalsXs";
import UcoinHeaderXs from "@/components/ru/Ucoin/Mobile/UcoinHeaderXs/UcoinHeaderXs";
import UcoinReadyXs from "@/components/ru/Ucoin/Mobile/UcoinReadyXs/UcoinReadyXs";
import UcoinWhyUnired2Xs from "@/components/ru/Ucoin/Mobile/UcoinWhyUnired2Xs/UcoinWhyUnired2Xs";
import UcoinWhyUniredXs from "@/components/ru/Ucoin/Mobile/UcoinWhyUniredXs/UcoinWhyUniredXs";


export default function page() {
  return (
    <>
      <div className="xs:hidden">
        <UcoinHeader />
        <UcoinWhyUnired />
        <UcoinWork />
        <UcoinWhenUse />
        <UcoinReady />
      </div>
      <div className="hidden xs:block">
        <UcoinHeaderXs />
        <UcoinWhyUniredXs />
        <UcoinBanksXs />
        <UcoinWhyUnired2Xs />
        <UcoinGoalsXs />
        <UcoinReadyXs/>
      </div>
    </>
  )
}
