import VisaCarusel from "@/components/uz/Visa/Desktop/VisaCarusel/VisaCarusel";
import VisaHeader from "@/components/uz/Visa/Desktop/VisaHeader/VisaHeader";
import VisaReady from "@/components/uz/Visa/Desktop/VisaReady/VisaReady";
import VisaWhyUnired from "@/components/uz/Visa/Desktop/VisaWhyUnired/VisaWhyUnired";
import VisaWork from "@/components/uz/Visa/Desktop/VisaWork/VisaWork";
import VisaCaruselXs from "@/components/uz/Visa/Mobile/VisaCaruselXs/VisaCaruselXs";
import VisaHeaderXs from "@/components/uz/Visa/Mobile/VisaHeaderXs/VisaHeaderXs";
import VisaReadyXs from "@/components/uz/Visa/Mobile/VisaReadyXs/VisaReadyXs";
import VisaWhyUnired2Xs from "@/components/uz/Visa/Mobile/VisaWhyUnired2Xs/VisaWhyUnired2Xs";
import VisaWhyUniredXs from "@/components/uz/Visa/Mobile/VisaWhyUniredXs/VisaWhyUniredXs";


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
