import UcoinHeader from '@/components/Ucoin/UcoinHeader/UcoinHeader'
import UcoinReady from '@/components/Ucoin/UcoinReady/UcoinReady'
import UcoinWhenUse from '@/components/Ucoin/UcoinWhenUse/UcoinWhenUse'
import UcoinWhyUnired from '@/components/Ucoin/UcoinWhyUnired/UcoinWhyUnired'
import UcoinWork from '@/components/Ucoin/UcoinWork/UcoinWork'
import React from 'react'

export default function page() {
  return (
    <>
      <UcoinHeader />
      <UcoinWhyUnired />
      <UcoinWork/>
      <UcoinWhenUse/>
      <UcoinReady/>
    </>
  )
}
