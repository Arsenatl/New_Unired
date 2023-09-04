import MoneyResults from "@/components/ru/MoneyTransfers/Desktop/MoneyCarusel/MoneyResults";
import MoneyCountry from "@/components/ru/MoneyTransfers/Desktop/MoneyCountry/MoneyCountry";
import MoneyFast from "@/components/ru/MoneyTransfers/Desktop/MoneyFast/MoneyFast";
import MoneyGoals from "@/components/ru/MoneyTransfers/Desktop/MoneyGoals/MoneyGoals";
import MoneyPrice from "@/components/ru/MoneyTransfers/Desktop/MoneyPrice/MoneyPrice";
import MoneyReady from "@/components/ru/MoneyTransfers/Desktop/MoneyReady/MoneyReady";
import MoneyTransfersBottomHeader from "@/components/ru/MoneyTransfers/Desktop/MoneyTransfersBottomHeader/MoneyTransfersBottomHeader";
import MoneyTransfersHeader from "@/components/ru/MoneyTransfers/Desktop/MoneyTransfersHeader/MoneyTransfersHeader";
import MoneyCountriesListXs from "@/components/ru/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesListXs";
import MoneyCountriesXs from "@/components/ru/MoneyTransfers/Mobile/MoneyCountriesXs/MoneyCountriesXs";
import MoneyFastXs from "@/components/ru/MoneyTransfers/Mobile/MoneyFastXs/MoneyFastXs";
import MoneyGoalsXs from "@/components/ru/MoneyTransfers/Mobile/MoneyGoalsXs/MoneyGoalsXs";
import MoneyHeaderXs from "@/components/ru/MoneyTransfers/Mobile/MoneyHeaderXs/MoneyHeaderXs";
import MoneyPriceXs from "@/components/ru/MoneyTransfers/Mobile/MoneyPriceXs/MoneyPriceXs";
import MoneyReadyXs from "@/components/ru/MoneyTransfers/Mobile/MoneyReadyXs/MoneyReadyXs";
import MoneyResultsXs from "@/components/ru/MoneyTransfers/Mobile/MoneyResults/MoneyResultsXs";
import MoneyWhyUnired2Xs from "@/components/ru/MoneyTransfers/Mobile/MoneyWhyUnired2Xs/MoneyWhyUnired2Xs";
import MoneyWhyUniredXs from "@/components/ru/MoneyTransfers/Mobile/MoneyWhyUniredXs/MoneyWhyUniredXs";

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
