import Link from 'next/link'
import Image from 'next/image'
import NavDown from './NavDown'
import { usePathname } from 'next/navigation'
import NavLanguage from './NavLanguage'

export default function NavRuLink() {
  const pathname = usePathname()

  return (
    <div className="container mt-9 relative">
      <div className="row flex-between">

        <Link
          href={'/ru'}
          className='style-italic font-bold uppercase text-[#F44949] mr-[60px]'>
          Unired
        </Link>
        <div className='flex-center gap-10'>
          <NavDown />

          <Link
            className='text-[16px] leading-[19px] font-semibold text-[#1C1C1C]'
            href={''}>
            Контакты
          </Link>
        </div>

        <div className="flex-center gap-10">
          <Link
            className='text-[16px] leading-[19px] font-bold text-[#1C1C1C]'
            href={'+998991234567'}>
            +998 99 123 45 67
          </Link>
          <div className="flex-center gap-[10px]">
            <Image
              width={24}
              height={24}
              src={'/global-black.svg'}
              alt='earth'
            />
            <NavLanguage />
          </div>
        </div>
      </div>
    </div>
  )
}
