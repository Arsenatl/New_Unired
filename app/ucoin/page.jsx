import UcoinHeader from "@/components/Ucoin/Desktop/UcoinHeader/UcoinHeader";
import UcoinReady from "@/components/Ucoin/Desktop/UcoinReady/UcoinReady";
import UcoinWhenUse from "@/components/Ucoin/Desktop/UcoinWhenUse/UcoinWhenUse";
import UcoinWhyUnired from "@/components/Ucoin/Desktop/UcoinWhyUnired/UcoinWhyUnired";
import UcoinWork from "@/components/Ucoin/Desktop/UcoinWork/UcoinWork";
import UcoinBanksXs from "@/components/Ucoin/Mobile/UcoinBanksXs/UcoinBanksXs";
import UcoinGoalsXs from "@/components/Ucoin/Mobile/UcoinGoalsXs/UcoinGoalsXs";
import UcoinHeaderXs from "@/components/Ucoin/Mobile/UcoinHeaderXs/UcoinHeaderXs";
import UcoinReadyXs from "@/components/Ucoin/Mobile/UcoinReadyXs/UcoinReadyXs";
import UcoinWhyUnired2Xs from "@/components/Ucoin/Mobile/UcoinWhyUnired2Xs/UcoinWhyUnired2Xs";
import UcoinWhyUniredXs from "@/components/Ucoin/Mobile/UcoinWhyUniredXs/UcoinWhyUniredXs";


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
