import VisaCarusel from "@/components/ru/Visa/Desktop/VisaCarusel/VisaCarusel";
import VisaHeader from "@/components/ru/Visa/Desktop/VisaHeader/VisaHeader";
import VisaReady from "@/components/ru/Visa/Desktop/VisaReady/VisaReady";
import VisaWhyUnired from "@/components/ru/Visa/Desktop/VisaWhyUnired/VisaWhyUnired";
import VisaWork from "@/components/ru/Visa/Desktop/VisaWork/VisaWork";
import VisaCaruselXs from "@/components/ru/Visa/Mobile/VisaCaruselXs/VisaCaruselXs";
import VisaHeaderXs from "@/components/ru/Visa/Mobile/VisaHeaderXs/VisaHeaderXs";
import VisaReadyXs from "@/components/ru/Visa/Mobile/VisaReadyXs/VisaReadyXs";
import VisaWhyUnired2Xs from "@/components/ru/Visa/Mobile/VisaWhyUnired2Xs/VisaWhyUnired2Xs";
import VisaWhyUniredXs from "@/components/ru/Visa/Mobile/VisaWhyUniredXs/VisaWhyUniredXs";


export default function page() {
  return (
    <>
      <div className="xs:hidden">
        <VisaHeader />
        <VisaWhyUnired />
        <VisaWork />
        <VisaCarusel />
        <VisaReady />
      </div>
      <div className="hidden xs:block">
        <VisaHeaderXs />
        <VisaWhyUniredXs />
        <VisaWhyUnired2Xs />
        <VisaCaruselXs />
        <VisaReadyXs/>
      </div>
    </>
  )
}
