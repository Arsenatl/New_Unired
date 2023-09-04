import Banks from '@/components/ru/Home/Desktop/Banks/Banks'
import HomeFacts from '@/components/ru/Home/Desktop/HomeFacts/HomeFacts'
import HomeFinances from '@/components/ru/Home/Desktop/HomeFinances/HomeFinances'
import HomeFooter from '@/components/ru/Home/Desktop/HomeFooter/HomeFooter'
import HomeHeader from '@/components/ru/Home/Desktop/HomeHeader/HomeHeader'
import HomeNav from '@/components/ru/Home/Desktop/HomeNav/HomeNav'
import HomePossibilities from '@/components/ru/Home/Desktop/HomePossibilities/HomePossibilities'
import HomeStart from '@/components/ru/Home/Desktop/HomeStart/HomeStart'
import HomeUsers from '@/components/ru/Home/Desktop/HomeUsers/HomeUsers'
import WhyUnired from '@/components/ru/Home/Desktop/WhyUnired/WhyUnired'
import HomeBanksXs from '@/components/ru/Home/Mobile/HomeBanksXs/HomeBanksXs'
import HomeFactsXs from '@/components/ru/Home/Mobile/HomeFactsXs/HomeFactsXs'
import HomeFooterXs from '@/components/ru/Home/Mobile/HomeFooterXs/HomeFooterXs'
import HomeHeaderXs from '@/components/ru/Home/Mobile/HomeHeaderXs/HomeHeaderXs'
import HomeHeaderXsBottom from '@/components/ru/Home/Mobile/HomeHeaderXs/HomeHeaderXsBottom'
import HomeNavXs from '@/components/ru/Home/Mobile/HomeNavXs/HomeNavXs'
import HomePhoneXs from '@/components/ru/Home/Mobile/HomePhoneXs/HomePhoneXs'
import HomePossibilitiesXs from '@/components/ru/Home/Mobile/HomePossibilitiesXs/HomePossibilitiesXs'
import HomeStartXs from '@/components/ru/Home/Mobile/HomeStartXs/HomeStartXs'
import HomeTransfers from '@/components/ru/Home/Mobile/HomeTransfers/HomeTransfers'
import HomeUsersXs from '@/components/ru/Home/Mobile/HomeUsers/HomeUsersXs'
import HomeWhyUniredXs from '@/components/ru/Home/Mobile/HomeWhyUniredXs/HomeWhyUniredXs'
import React from 'react'

export default function HomeRu() {
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
