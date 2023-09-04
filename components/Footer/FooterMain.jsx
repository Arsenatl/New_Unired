'use client'
import { usePathname } from 'next/navigation'
import FooterUz from './uz/Desktop/FooterUz'
import FooterUzLinks from './uz/Desktop/FooterUzLinks'
import FooterUzXs from './uz/Mobile/FooterUzXs'
import FooterRu from './ru/Desktop/FooterRu'
import FooterRuLinks from './ru/Desktop/FooterRuLinks'
import FooterRuXs from './ru/Mobile/FooterRuXs'

export default function FooterMain() {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/' || pathname === '/money_transfers' || pathname === '/my_home' || pathname === '/other' || pathname === '/payments' || pathname === '/ucoin' || pathname === '/visa_card' || pathname === '/' ?
                <>
                    <FooterUz>
                        <FooterUzLinks />
                    </FooterUz>
                    <div className="hidden xs:block">
                        <FooterUzXs />
                    </div>
                </> :
                <>
                    <FooterRu>
                        <FooterRuLinks />
                    </FooterRu>
                    <div className="hidden xs:block">
                        <FooterRuXs />
                    </div>
                </>
            }
        </>
    )
}
