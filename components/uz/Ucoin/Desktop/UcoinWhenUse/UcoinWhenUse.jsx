import Image from 'next/image'
import UcoinWhenUseCarusel from './UcoinWhenUseCarusel'

export default function UcoinWhenUse() {
  return (
    <section>
    <div className="container my-32">
        <div className="row flex justify-between">
            <div>
                <h2 className='text-18 font-bold text-[#EF2B23] tracking-wide mb-7'>“Ucoin”дан қаерда фойдаланиш мумкин?</h2>
                <p className='text-[22px] font-normal leading-8 tracking-wide text-[#1C1C1C]'>Айни пайтда Ўзбекистондан Қозоғистон, <br /> Россия, Туркия, Озарбайжон, <br /> Арманистон ва Тожикистонга бемалол <br />пул жўнатиш мумкин.</p>
            </div>
            <UcoinWhenUseCarusel/>
        </div>
    </div>
</section>
  )
}
