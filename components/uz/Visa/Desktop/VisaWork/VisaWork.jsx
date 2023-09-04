import VisaNum from "./VisaNum";

export default function VisaWork() {
  return (
    <section className="bg-[#F7F9FC] pt-32 pb-32 my-16">
      <div className="container">
        <div className="row">
          <div className="mb-24">
            <h2 className='text-18 font-bold tracking-wide text-[#EF2B23]'>Бу қандай ишлайди</h2>
            <h1 className='text-36 mt-7'>VISA карталаридан осон ва тез фойдаланинг</h1>
          </div>
          <VisaNum/>
        </div>
      </div>
    </section>
  )
}
