import MyHomeFast from '@/components/uz/MyHome/Desktop/MyHomeFast/MyHomeFast'
import MyHomeHeader from '@/components/uz/MyHome/Desktop/MyHomeHeader/MyHomeHeader'
import MyHomeReady from '@/components/uz/MyHome/Desktop/MyHomeReady/MyHomeReady'
import MyHomeServices from '@/components/uz/MyHome/Desktop/MyHomeServices/MyHomeServices'
import MyHomeWhyUnired from '@/components/uz/MyHome/Desktop/MyHomeWhyUnired/MyHomeWhyUnired'
import MyHomeFastXs from '@/components/uz/MyHome/Mobile/MyHomeFastXs/MyHomeFastXs'
import MyHomeHeaderXs from '@/components/uz/MyHome/Mobile/MyHomeHeaderXs/MyHomeHeaderXs'
import MyHomeReadyXs from '@/components/uz/MyHome/Mobile/MyHomeReadyXs/MyHomeReadyXs'
import MyHomeServicesXs from '@/components/uz/MyHome/Mobile/MyHomeServicesXs/MyHomeServicesXs'
import MyHomeWhyUniredXs from '@/components/uz/MyHome/Mobile/MyHomeWhyUniredXs/MyHomeWhyUniredXs'
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
