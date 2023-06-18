import UcoinHeader from '@/components/Ucoin/UcoinHeader/UcoinHeader'
import UcoinReady from '@/components/Ucoin/UcoinReady/UcoinReady'
import UcoinWhenUse from '@/components/Ucoin/UcoinWhenUse/UcoinWhenUse'
import UcoinWork from '@/components/Ucoin/UcoinWork/UcoinWork'
import UcoinWhyUnired from '@/components/Visa/VisaWhyUnired/VisaWhyUnired'
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
