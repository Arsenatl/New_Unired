import Link from 'next/link'
import HomeFooterLanguageXs from './HomeFooterLanguageXs'
import HomeFooterListXs from './HomeFooterListXs'

export default function HomeFooterXs() {
    return (
        <footer className='bg-set bg-homeFooterXs pt-[135px] pb-[110px]'>
            <div className="container">
                <Link
                    href={'/ru'}
                    className='style-italic-xs font-bold text-[#F44949] uppercase'>
                    Unired
                </Link>
                <HomeFooterLanguageXs />
                <HomeFooterListXs />
            </div>
        </footer>
    )
}
