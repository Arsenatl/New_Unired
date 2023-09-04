import MoneyResults from "@/components/uz/MoneyTransfers/Desktop/MoneyCarusel/MoneyResults";
import MoneyCountry from "@/components/uz/MoneyTransfers/Desktop/MoneyCountry/MoneyCountry";
import MoneyFast from "@/components/uz/MoneyTransfers/Desktop/MoneyFast/MoneyFast";
import MoneyGoals from "@/components/uz/MoneyTransfers/Desktop/MoneyGoals/MoneyGoals";
import MoneyPrice from "@/components/uz/MoneyTransfers/Desktop/MoneyPrice/MoneyPrice";
import MoneyReady from "@/components/uz/MoneyTransfers/Desktop/MoneyReady/MoneyReady";
import MoneyTransfersBottomHeader from "@/components/uz/MoneyTransfers/Desktop/MoneyTransfersBottomHeader/MoneyTransfersBottomHeader";
import MoneyTransfersHeader from "@/components/uz/MoneyTransfers/Desktop/MoneyTransfersHeader/MoneyTransfersHeader";
import MoneyCountriesListXs from "@/components/uz/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesListXs";
import MoneyCountriesXs from "@/components/uz/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesXs";
import MoneyFastXs from "@/components/uz/MoneyTransfers/Mobile/MoneyFastXs/MoneyFastXs";
import MoneyGoalsXs from "@/components/uz/MoneyTransfers/Mobile/MoneyGoalsXs/MoneyGoalsXs";
import MoneyHeaderXs from "@/components/uz/MoneyTransfers/Mobile/MoneyHeaderXs/MoneyHeaderXs";
import MoneyPriceXs from "@/components/uz/MoneyTransfers/Mobile/MoneyPriceXs/MoneyPriceXs";
import MoneyReadyXs from "@/components/uz/MoneyTransfers/Mobile/MoneyReadyXs/MoneyReadyXs";
import MoneyResultsXs from "@/components/uz/MoneyTransfers/Mobile/MoneyResults/MoneyResultsXs";
import MoneyWhyUnired2Xs from "@/components/uz/MoneyTransfers/Mobile/MoneyWhyUnired2Xs/MoneyWhyUnired2Xs";
import MoneyWhyUniredXs from "@/components/uz/MoneyTransfers/Mobile/MoneyWhyUniredXs/MoneyWhyUniredXs";

export const metadata = {
  title: 'Международный денежный перевод без комиссии из Узбекистана в Россию',
  description: 'Международные денежные переводы без комиссии из Узбекистана в Россию и в СНГ',
  keywords:'Международный денежный перевод с карты на карту без комиссии из Узбекистана в Россию и в СНГ, перевод сумов в рубли'
}

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
