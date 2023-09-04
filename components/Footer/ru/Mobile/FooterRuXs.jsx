'use client'
import Link from 'next/link'
import FooterLanguageXs from './FooterLanguageXs'
import FooterListXs from './FooterListXs'
import { usePathname } from 'next/navigation'

export default function FooterRuXs() {
    const pathname = usePathname()
    return (
        <footer className={`${(pathname === '/ru/money_transfers' || pathname === '/ru/payments') ? 'bg-[#F7F9FC]  py-14 pt-12' : 'bg-transparent pb-14 mt-24'} ${pathname === '/ru' ? ' hidden' : 'block'}`}>
            <div className="container">
                <Link
                    href={'/ru'}
                    className='style-italic-xs font-bold text-[#F44949] uppercase'>
                    Unired
                </Link>
                <FooterLanguageXs />
                <FooterListXs />
            </div>
        </footer>
    )
}
