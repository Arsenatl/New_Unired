import VisaCarusel from '@/components/Visa/VisaCarusel/VisaCarusel'
import VisaHeader from '@/components/Visa/VisaHeader/VisaHeader'
import VisaReady from '@/components/Visa/VisaReady/VisaReady'
import VisaWhyUnired from '@/components/Visa/VisaWhyUnired/VisaWhyUnired'
import VisaWork from '@/components/Visa/VisaWork/VisaWork'

export default function page() {
  return (
    <>
      <VisaHeader />
      <VisaWhyUnired />
      <VisaWork/>
      <VisaCarusel/>
      <VisaReady/>
    </>
  )
}
