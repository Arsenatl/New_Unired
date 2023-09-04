import PaymentsBank from "@/components/ru/Payments/Desktop/PaymentsBank/PaymentsBank";
import PaymentsCarusel from "@/components/ru/Payments/Desktop/PaymentsCarusel/PaymentsCarusel";
import PaymentsHeader from "@/components/ru/Payments/Desktop/PaymentsHeader/PaymentsHeader";
import PaymentsHowWork from "@/components/ru/Payments/Desktop/PaymentsHowWork/PaymentsHowWork";
import PaymentsNum from "@/components/ru/Payments/Desktop/PaymentsNum/PaymentsNum";
import PaymentsPayment from "@/components/ru/Payments/Desktop/PaymentsPayment/PaymentsPayment";
import PaymentsReady from "@/components/ru/Payments/Desktop/PaymentsReady/PaymentsReady";
import PaymentsServices from "@/components/ru/Payments/Desktop/PaymentsServices/PaymentsServices";
import PaymentsWhyUnired from "@/components/ru/Payments/Desktop/PaymentsWhyUnired/PaymentsWhyUnired";
import PaymentsBanksXs from "@/components/ru/Payments/Mobile/PaymentsBanksXs/PaymentsBanksXs";
import PaymentsCaruselXs from "@/components/ru/Payments/Mobile/PaymentsCaruselXs/PaymentsCaruselXs";
import PaymentsFastXs from "@/components/ru/Payments/Mobile/PaymentsFastXs/PaymentsFastXs";
import PaymentsHeaderXs from "@/components/ru/Payments/Mobile/PaymentsHeaderXs/PaymentsHeaderXs";
import PaymentsPriceXs from "@/components/ru/Payments/Mobile/PaymentsPriceXs/PaymentsPriceXs";
import PaymentsReadyXs from "@/components/ru/Payments/Mobile/PaymentsReadyXs/PaymentsReadyXs";
import PaymentsWhyUnired2Xs from "@/components/ru/Payments/Mobile/PaymentsWhyUnired2Xs/PaymentsWhyUnired2Xs";
import PaymentsWhyUniredXs from "@/components/ru/Payments/Mobile/PaymentsWhyUniredXs/PaymentsWhyUniredXs";



export default function page() {
  return (
    <>
      <div className="xs:hidden">
        <PaymentsHeader />
        <PaymentsBank />
        <div className="bg-[#F7F9FC] pt-32 mt-20 pb-96">
          <PaymentsWhyUnired />
          <PaymentsHowWork />
          <PaymentsNum />
        </div>
        <PaymentsCarusel />
        <PaymentsServices />
        <PaymentsPayment />
        <PaymentsReady />
      </div>
      <div className="hidden xs:block">
        <PaymentsHeaderXs />
        <PaymentsBanksXs />
        <div className="mt-14 pt-14 bg-[#F7F9FC]">
          <PaymentsWhyUniredXs />
          <PaymentsFastXs />
          <PaymentsWhyUnired2Xs />
          <PaymentsCaruselXs />
        </div>
        <PaymentsPriceXs />
        <PaymentsReadyXs />
      </div>
    </>
  )
}
