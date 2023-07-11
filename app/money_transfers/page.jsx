import MoneyResults from "@/components/MoneyTransfers/Desktop/MoneyCarusel/MoneyResults";
import MoneyCountry from "@/components/MoneyTransfers/Desktop/MoneyCountry/MoneyCountry";
import MoneyFast from "@/components/MoneyTransfers/Desktop/MoneyFast/MoneyFast";
import MoneyGoals from "@/components/MoneyTransfers/Desktop/MoneyGoals/MoneyGoals";
import MoneyPrice from "@/components/MoneyTransfers/Desktop/MoneyPrice/MoneyPrice";
import MoneyReady from "@/components/MoneyTransfers/Desktop/MoneyReady/MoneyReady";
import MoneyTransfersBottomHeader from "@/components/MoneyTransfers/Desktop/MoneyTransfersBottomHeader/MoneyTransfersBottomHeader";
import MoneyTransfersHeader from "@/components/MoneyTransfers/Desktop/MoneyTransfersHeader/MoneyTransfersHeader";
import MoneyCountriesListXs from "@/components/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesListXs";
import MoneyCountriesXs from "@/components/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesXs";
import MoneyFastXs from "@/components/MoneyTransfers/Mobile/MoneyFastXs/MoneyFastXs";
import MoneyGoalsXs from "@/components/MoneyTransfers/Mobile/MoneyGoalsXs/MoneyGoalsXs";
import MoneyHeaderXs from "@/components/MoneyTransfers/Mobile/MoneyHeaderXs/MoneyHeaderXs";
import MoneyPriceXs from "@/components/MoneyTransfers/Mobile/MoneyPriceXs/MoneyPriceXs";
import MoneyReadyXs from "@/components/MoneyTransfers/Mobile/MoneyReadyXs/MoneyReadyXs";
import MoneyResultsXs from "@/components/MoneyTransfers/Mobile/MoneyResults/MoneyResultsXs";
import MoneyWhyUnired2Xs from "@/components/MoneyTransfers/Mobile/MoneyWhyUnired2Xs/MoneyWhyUnired2Xs";
import MoneyWhyUniredXs from "@/components/MoneyTransfers/Mobile/MoneyWhyUniredXs/MoneyWhyUniredXs";


export default function page() {
  return (
    <>
      <div className="xs:hidden">
        <MoneyTransfersHeader />
        <MoneyTransfersBottomHeader />
        <MoneyFast />
        <MoneyGoals />
        <MoneyTransfersBottomHeader />
        <MoneyCountry />
        <MoneyResults />
        <MoneyPrice />
        <MoneyReady />
      </div>
      <div className="hidden xs:block">
        <MoneyHeaderXs />
        <MoneyWhyUniredXs />
        <MoneyFastXs />
        <MoneyGoalsXs />
        <MoneyWhyUnired2Xs />
        <MoneyCountriesXs />
        <MoneyCountriesListXs />
        <MoneyResultsXs />
        <MoneyPriceXs />
        <MoneyReadyXs/>
      </div>
    </>
  )
}
