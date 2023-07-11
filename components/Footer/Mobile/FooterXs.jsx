'use client'
import Link from 'next/link'
import FooterLanguageXs from './FooterLanguageXs'
import FooterListXs from './FooterListXs'
import { usePathname } from 'next/navigation'

export default function FooterXs() {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <footer className={`${(pathname === '/money_transfers' || pathname === '/payments') ? 'bg-[#F7F9FC]  py-14 pt-12' : 'bg-transparent pb-14 mt-24'} ${pathname === '/' ? ' hidden' : 'block'}`}>
            <div className="container">
                <Link
                    href={'/'}
                    className='style-italic-xs font-bold text-[#F44949] uppercase'>
                    Unired
                </Link>
                <FooterLanguageXs />
                <FooterListXs />
            </div>
        </footer>
    )
}
