import PaymentsWhyUnired from '@/components/Payments/PaymentsWhyUnired/PaymentsWhyUnired'
import PaymentsBank from '@/components/Payments/PaymentsBank/PaymentsBank'
import PaymentsHeader from '@/components/Payments/PaymentsHeader/PaymentsHeader'
import PaymentsHowWork from '@/components/Payments/PaymentsHowWork/PaymentsHowWork'
import PaymentsNum from '@/components/Payments/PaymentsNum/PaymentsNum'
import PaymentsCarusel from '@/components/Payments/PaymentsCarusel/PaymentsCarusel'
import PaymentsServices from '@/components/Payments/PaymentsServices/PaymentsServices'
import PaymentsPayment from '@/components/Payments/PaymentsPayment/PaymentsPayment'
import PaymentsReady from '@/components/Payments/PaymentsReady/PaymentsReady'


export default function page() {
  return (
    <>
      <PaymentsHeader />
      <PaymentsBank />
      <div className="bg-[#F7F9FC] pt-32 mt-20 pb-96">
        <PaymentsWhyUnired />
        <PaymentsHowWork />
        <PaymentsNum />
      </div>
        <PaymentsCarusel />
      <PaymentsServices />
      <PaymentsPayment/>
      <PaymentsReady/>
    </>
  )
}
