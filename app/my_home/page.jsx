import MyHomeFast from '@/components/MyHome/MyHomeFast/MyHomeFast'
import MyHomeHeader from '@/components/MyHome/MyHomeHeader/MyHomeHeader'
import MyHomeReady from '@/components/MyHome/MyHomeReady/MyHomeReady'
import MyHomeServices from '@/components/MyHome/MyHomeServices/MyHomeServices'
import MyHomeWhyUnired from '@/components/MyHome/MyHomeWhyUnired/MyHomeWhyUnired'
import React from 'react'

export default function page() {
  return (
    <>
    <MyHomeHeader/>
    <MyHomeWhyUnired/>
    <MyHomeFast/>
    <MyHomeServices/>
    <MyHomeReady/>
    </>
  )
}
