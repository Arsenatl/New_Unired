import PaymentsBank from "@/components/Payments/Desktop/PaymentsBank/PaymentsBank";
import PaymentsCarusel from "@/components/Payments/Desktop/PaymentsCarusel/PaymentsCarusel";
import PaymentsHeader from "@/components/Payments/Desktop/PaymentsHeader/PaymentsHeader";
import PaymentsHowWork from "@/components/Payments/Desktop/PaymentsHowWork/PaymentsHowWork";
import PaymentsNum from "@/components/Payments/Desktop/PaymentsNum/PaymentsNum";
import PaymentsPayment from "@/components/Payments/Desktop/PaymentsPayment/PaymentsPayment";
import PaymentsReady from "@/components/Payments/Desktop/PaymentsReady/PaymentsReady";
import PaymentsServices from "@/components/Payments/Desktop/PaymentsServices/PaymentsServices";
import PaymentsWhyUnired from "@/components/Payments/Desktop/PaymentsWhyUnired/PaymentsWhyUnired";
import PaymentsBanksXs from "@/components/Payments/Mobile/PaymentsBanksXs/PaymentsBanksXs";
import PaymentsCaruselXs from "@/components/Payments/Mobile/PaymentsCaruselXs/PaymentsCaruselXs";
import PaymentsFastXs from "@/components/Payments/Mobile/PaymentsFastXs/PaymentsFastXs";
import PaymentsHeaderXs from "@/components/Payments/Mobile/PaymentsHeaderXs/PaymentsHeaderXs";
import PaymentsPriceXs from "@/components/Payments/Mobile/PaymentsPriceXs/PaymentsPriceXs";
import PaymentsReadyXs from "@/components/Payments/Mobile/PaymentsReadyXs/PaymentsReadyXs";
import PaymentsWhyUnired2Xs from "@/components/Payments/Mobile/PaymentsWhyUnired2Xs/PaymentsWhyUnired2Xs";
import PaymentsWhyUniredXs from "@/components/Payments/Mobile/PaymentsWhyUniredXs/PaymentsWhyUniredXs";



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
