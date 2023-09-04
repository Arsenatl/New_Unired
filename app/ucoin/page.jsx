import UcoinHeader from "@/components/uz/Ucoin/Desktop/UcoinHeader/UcoinHeader";
import UcoinReady from "@/components/uz/Ucoin/Desktop/UcoinReady/UcoinReady";
import UcoinWhenUse from "@/components/uz/Ucoin/Desktop/UcoinWhenUse/UcoinWhenUse";
import UcoinWhyUnired from "@/components/uz/Ucoin/Desktop/UcoinWhyUnired/UcoinWhyUnired";
import UcoinWork from "@/components/uz/Ucoin/Desktop/UcoinWork/UcoinWork";
import UcoinBanksXs from "@/components/uz/Ucoin/Mobile/UcoinBanksXs/UcoinBanksXs";
import UcoinGoalsXs from "@/components/uz/Ucoin/Mobile/UcoinGoalsXs/UcoinGoalsXs";
import UcoinHeaderXs from "@/components/uz/Ucoin/Mobile/UcoinHeaderXs/UcoinHeaderXs";
import UcoinReadyXs from "@/components/uz/Ucoin/Mobile/UcoinReadyXs/UcoinReadyXs";
import UcoinWhyUnired2Xs from "@/components/uz/Ucoin/Mobile/UcoinWhyUnired2Xs/UcoinWhyUnired2Xs";
import UcoinWhyUniredXs from "@/components/uz/Ucoin/Mobile/UcoinWhyUniredXs/UcoinWhyUniredXs";


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
