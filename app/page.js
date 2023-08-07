import Banks from '@/components/Home/Desktop/Banks/Banks'
import HomeFacts from '@/components/Home/Desktop/HomeFacts/HomeFacts'
import HomeFinances from '@/components/Home/Desktop/HomeFinances/HomeFinances'
import HomeFooter from '@/components/Home/Desktop/HomeFooter/HomeFooter'
import HomeHeader from '@/components/Home/Desktop/HomeHeader/HomeHeader'
import HomeNav from '@/components/Home/Desktop/HomeNav/HomeNav'
import HomePossibilities from '@/components/Home/Desktop/HomePossibilities/HomePossibilities'
import HomeStart from '@/components/Home/Desktop/HomeStart/HomeStart'
import HomeUsers from '@/components/Home/Desktop/HomeUsers/HomeUsers'
import WhyUnired from '@/components/Home/Desktop/WhyUnired/WhyUnired'
import HomeBanksXs from '@/components/Home/Mobile/HomeBanksXs/HomeBanksXs'
import HomeFactsXs from '@/components/Home/Mobile/HomeFactsXs/HomeFactsXs'
import HomeFooterXs from '@/components/Home/Mobile/HomeFooterXs/HomeFooterXs'
import HomeHeaderXs from '@/components/Home/Mobile/HomeHeaderXs/HomeHeaderXs'
import HomeHeaderXsBottom from '@/components/Home/Mobile/HomeHeaderXs/HomeHeaderXsBottom'
import HomeNavXs from '@/components/Home/Mobile/HomeNavXs/HomeNavXs'
import HomePhoneXs from '@/components/Home/Mobile/HomePhoneXs/HomePhoneXs'
import HomePossibilitiesXs from '@/components/Home/Mobile/HomePossibilitiesXs/HomePossibilitiesXs'
import HomeStartXs from '@/components/Home/Mobile/HomeStartXs/HomeStartXs'
import HomeTransfers from '@/components/Home/Mobile/HomeTransfers/HomeTransfers'
import HomeUsersXs from '@/components/Home/Mobile/HomeUsers/HomeUsersXs'
import HomeWhyUniredXs from '@/components/Home/Mobile/HomeWhyUniredXs/HomeWhyUniredXs'

// export const metadata = {
//   title: 'Международный денежный перевод без комиссии из Узбекистана в Россию',
//   description: 'Международные денежные переводы без КОМИССИИ из Узбекистана в Россию и в СНГ',
//   keywords: 'Unired Mobile, Международный денежный перевод с карты на карту без комиссии из Узбекистана в Россию и в СНГ, перевод сумов в рубли'
// }

export default function Home() {
  return (
    <>
      <div className='xs:hidden'>
        <div className='bg-homeHeader bg-set py-1 mb-8'>
          <HomeNav />
          <HomeHeader />
        </div>
        <Banks />
        <HomeFinances />
        <HomeUsers />
        <WhyUnired />
        <HomePossibilities />
        <HomeFacts />
        <HomeStart />
        <HomeFooter />
      </div>
      <div className='hidden xs:block'>
        <div className='bg-set bg-homeHeaderXs'>
          <HomeNavXs />
          <HomeHeaderXs />
        </div>
        <HomeHeaderXsBottom />
        <HomePhoneXs />
        <HomeBanksXs />
        <HomeTransfers />
        <HomeUsersXs />
        <HomeWhyUniredXs />
        <HomePossibilitiesXs />
        <HomeFactsXs />
        <HomeStartXs />
        <HomeFooterXs />
      </div>
    </>
  )
}
