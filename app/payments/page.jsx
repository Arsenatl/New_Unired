import PaymentsBank from "@/components/uz/Payments/Desktop/PaymentsBank/PaymentsBank";
import PaymentsCarusel from "@/components/uz/Payments/Desktop/PaymentsCarusel/PaymentsCarusel";
import PaymentsHeader from "@/components/uz/Payments/Desktop/PaymentsHeader/PaymentsHeader";
import PaymentsHowWork from "@/components/uz/Payments/Desktop/PaymentsHowWork/PaymentsHowWork";
import PaymentsNum from "@/components/uz/Payments/Desktop/PaymentsNum/PaymentsNum";
import PaymentsPayment from "@/components/uz/Payments/Desktop/PaymentsPayment/PaymentsPayment";
import PaymentsReady from "@/components/uz/Payments/Desktop/PaymentsReady/PaymentsReady";
import PaymentsServices from "@/components/uz/Payments/Desktop/PaymentsServices/PaymentsServices";
import PaymentsWhyUnired from "@/components/uz/Payments/Desktop/PaymentsWhyUnired/PaymentsWhyUnired";
import PaymentsBanksXs from "@/components/uz/Payments/Mobile/PaymentsBanksXs/PaymentsBanksXs";
import PaymentsCaruselXs from "@/components/uz/Payments/Mobile/PaymentsCaruselXs/PaymentsCaruselXs";
import PaymentsFastXs from "@/components/uz/Payments/Mobile/PaymentsFastXs/PaymentsFastXs";
import PaymentsHeaderXs from "@/components/uz/Payments/Mobile/PaymentsHeaderXs/PaymentsHeaderXs";
import PaymentsPriceXs from "@/components/uz/Payments/Mobile/PaymentsPriceXs/PaymentsPriceXs";
import PaymentsReadyXs from "@/components/uz/Payments/Mobile/PaymentsReadyXs/PaymentsReadyXs";
import PaymentsServicesXs from "@/components/uz/Payments/Mobile/PaymentsServicesXs/PaymentsServicesXs";
import PaymentsWhyUnired2Xs from "@/components/uz/Payments/Mobile/PaymentsWhyUnired2Xs/PaymentsWhyUnired2Xs";
import PaymentsWhyUniredXs from "@/components/uz/Payments/Mobile/PaymentsWhyUniredXs/PaymentsWhyUniredXs";



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
        <PaymentsServicesXs />
        <PaymentsPriceXs />
        <PaymentsReadyXs />
      </div>
    </>
  )
}
