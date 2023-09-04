

import MyHomeFast from '@/components/ru/MyHome/Desktop/MyHomeFast/MyHomeFast'
import MyHomeHeader from '@/components/ru/MyHome/Desktop/MyHomeHeader/MyHomeHeader'
import MyHomeReady from '@/components/ru/MyHome/Desktop/MyHomeReady/MyHomeReady'
import MyHomeServices from '@/components/ru/MyHome/Desktop/MyHomeServices/MyHomeServices'
import MyHomeWhyUnired from '@/components/ru/MyHome/Desktop/MyHomeWhyUnired/MyHomeWhyUnired'
import MyHomeFastXs from '@/components/ru/MyHome/Mobile/MyHomeFastXs/MyHomeFastXs'
import MyHomeHeaderXs from '@/components/ru/MyHome/Mobile/MyHomeHeaderXs/MyHomeHeaderXs'
import MyHomeReadyXs from '@/components/ru/MyHome/Mobile/MyHomeReadyXs/MyHomeReadyXs'
import MyHomeServicesXs from '@/components/ru/MyHome/Mobile/MyHomeServicesXs/MyHomeServicesXs'
import MyHomeWhyUniredXs from '@/components/ru/MyHome/Mobile/MyHomeWhyUniredXs/MyHomeWhyUniredXs'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='xs:hidden'>
        <MyHomeHeader />
        <MyHomeWhyUnired />
        <MyHomeFast />
        <MyHomeServices />
        <MyHomeReady />
      </div>
      <div className="hidden xs:block">
        <MyHomeHeaderXs />
        <MyHomeWhyUniredXs />
        <MyHomeFastXs />
        <MyHomeServicesXs />
        <MyHomeReadyXs />
      </div>
    </>
  )
}
