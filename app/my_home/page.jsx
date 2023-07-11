

import MyHomeFast from '@/components/MyHome/Desktop/MyHomeFast/MyHomeFast'
import MyHomeHeader from '@/components/MyHome/Desktop/MyHomeHeader/MyHomeHeader'
import MyHomeReady from '@/components/MyHome/Desktop/MyHomeReady/MyHomeReady'
import MyHomeServices from '@/components/MyHome/Desktop/MyHomeServices/MyHomeServices'
import MyHomeWhyUnired from '@/components/MyHome/Desktop/MyHomeWhyUnired/MyHomeWhyUnired'
import MyHomeFastXs from '@/components/MyHome/Mobile/MyHomeFastXs/MyHomeFastXs'
import MyHomeHeaderXs from '@/components/MyHome/Mobile/MyHomeHeaderXs/MyHomeHeaderXs'
import MyHomeReadyXs from '@/components/MyHome/Mobile/MyHomeReadyXs/MyHomeReadyXs'
import MyHomeServicesXs from '@/components/MyHome/Mobile/MyHomeServicesXs/MyHomeServicesXs'
import MyHomeWhyUniredXs from '@/components/MyHome/Mobile/MyHomeWhyUniredXs/MyHomeWhyUniredXs'
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
