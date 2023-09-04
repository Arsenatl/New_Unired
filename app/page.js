import Banks from '@/components/uz/Home/Desktop/Banks/Banks'
import HomeFacts from '@/components/uz/Home/Desktop/HomeFacts/HomeFacts'
import HomeFinances from '@/components/uz/Home/Desktop/HomeFinances/HomeFinances'
import HomeFooter from '@/components/uz/Home/Desktop/HomeFooter/HomeFooter'
import HomeHeader from '@/components/uz/Home/Desktop/HomeHeader/HomeHeader'
import HomeNav from '@/components/uz/Home/Desktop/HomeNav/HomeNav'
import HomePossibilities from '@/components/uz/Home/Desktop/HomePossibilities/HomePossibilities'
import HomeStart from '@/components/uz/Home/Desktop/HomeStart/HomeStart'
import HomeUsers from '@/components/uz/Home/Desktop/HomeUsers/HomeUsers'
import WhyUnired from '@/components/uz/Home/Desktop/WhyUnired/WhyUnired'
import HomeBanksXs from '@/components/uz/Home/Mobile/HomeBanksXs/HomeBanksXs'
import HomeFactsXs from '@/components/uz/Home/Mobile/HomeFactsXs/HomeFactsXs'
import HomeFooterXs from '@/components/uz/Home/Mobile/HomeFooterXs/HomeFooterXs'
import HomeHeaderXs from '@/components/uz/Home/Mobile/HomeHeaderXs/HomeHeaderXs'
import HomeHeaderXsBottom from '@/components/uz/Home/Mobile/HomeHeaderXs/HomeHeaderXsBottom'
import HomeNavXs from '@/components/uz/Home/Mobile/HomeNavXs/HomeNavXs'
import HomePhoneXs from '@/components/uz/Home/Mobile/HomePhoneXs/HomePhoneXs'
import HomePossibilitiesXs from '@/components/uz/Home/Mobile/HomePossibilitiesXs/HomePossibilitiesXs'
import HomeStartXs from '@/components/uz/Home/Mobile/HomeStartXs/HomeStartXs'
import HomeTransfers from '@/components/uz/Home/Mobile/HomeTransfers/HomeTransfers'
import HomeUsersXs from '@/components/uz/Home/Mobile/HomeUsers/HomeUsersXs'
import HomeWhyUniredXs from '@/components/uz/Home/Mobile/HomeWhyUniredXs/HomeWhyUniredXs'

export default function page() {
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
