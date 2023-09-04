import Image from 'next/image'
import Link from 'next/link'
import HomeNavDown from './HomeNavDown'
import HomeNavLanguage from './HomeNavLanguage'

export default function HomeNav() {
    return (
        <nav>
            <div className="container mt-9 relative">
                <div className="row flex-between">

                    <Link
                        href={'/'}
                        className='style-italic font-bold text-white mr-[60px]'>
                        Unired
                    </Link>
                    <div className='flex-center gap-10'>
                        <HomeNavDown />

                        <Link
                            className='text-[16px] leading-[19px] font-semibold text-white'
                            href={''}>
                            Контактлар
                        </Link>
                    </div>

                    <div className="flex-center gap-10">
                        <Link
                            className='text-[16px] leading-[19px] font-bold text-white'
                            href={'+998991234567'}>
                            +998 99 123 45 67
                        </Link>
                        <div className="flex-center gap-[10px]">
                            <Image
                                width={24}
                                height={24}
                                src={'/global.svg'}
                                alt='earth'
                            />
                            <HomeNavLanguage />
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
