import VisaCarusel from "@/components/Visa/Desktop/VisaCarusel/VisaCarusel";
import VisaHeader from "@/components/Visa/Desktop/VisaHeader/VisaHeader";
import VisaReady from "@/components/Visa/Desktop/VisaReady/VisaReady";
import VisaWhyUnired from "@/components/Visa/Desktop/VisaWhyUnired/VisaWhyUnired";
import VisaWork from "@/components/Visa/Desktop/VisaWork/VisaWork";
import VisaCaruselXs from "@/components/Visa/Mobile/VisaCaruselXs/VisaCaruselXs";
import VisaHeaderXs from "@/components/Visa/Mobile/VisaHeaderXs/VisaHeaderXs";
import VisaReadyXs from "@/components/Visa/Mobile/VisaReadyXs/VisaReadyXs";
import VisaWhyUnired2Xs from "@/components/Visa/Mobile/VisaWhyUnired2Xs/VisaWhyUnired2Xs";
import VisaWhyUniredXs from "@/components/Visa/Mobile/VisaWhyUniredXs/VisaWhyUniredXs";


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
