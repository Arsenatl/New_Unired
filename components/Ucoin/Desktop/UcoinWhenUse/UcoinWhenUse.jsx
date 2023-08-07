import Image from 'next/image'
import UcoinWhenUseCarusel from './UcoinWhenUseCarusel'

export default function UcoinWhenUse() {
  return (
    <section>
    <div className="container my-32">
        <div className="row flex justify-between">
            <div>
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide mb-7'>Где можно использовать?</h2>
                <p className='text-[22px] font-normal leading-8 tracking-wide text-[#1C1C1C]'>На данный момент из Узбекистана вы можете <br />легко отправлять деньги в Казахстан, Россию,<br /> Турцию, Азербайджан, Армению и Таджикистан. <br /> Универсальность Ucoin открывает перед вами <br /> возможности для мгновенных переводов в <br />разные страны, делая финансовые операции <br /> быстрыми и удобными.</p>
            </div>
            <UcoinWhenUseCarusel/>
        </div>
    </div>
</section>
  )
}
