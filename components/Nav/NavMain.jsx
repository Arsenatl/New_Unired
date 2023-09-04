'use client'
import { usePathname } from 'next/navigation'
import NavUz from './uz/Desktop/NavUz'
import NavUzLink from './uz/Desktop/NavUzLink'
import NavUzXs from './uz/Mobile/NavUzXs'
import NavRu from './ru/Desktop/NavRu'
import NavRuLink from './ru/Desktop/NavRuLink'
import NavRuXs from './ru/Mobile/NavRuXs'

export default function NavMain() {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/' || pathname === '/money_transfers' || pathname === '/my_home' || pathname === '/other' || pathname === '/payments' || pathname === '/ucoin' || pathname === '/visa_card' || pathname === '/' ?
                <>
                    <NavUz >
                        <NavUzLink />
                    </NavUz>
                    <div className='xs:block hidden'>
                        <NavUzXs />
                    </div>
                </> :
                <>
                    <NavRu >
                        <NavRuLink />
                    </NavRu>
                    <div className='xs:block hidden'>
                        <NavRuXs />
                    </div>
                </>
            }

        </>
    )
}
