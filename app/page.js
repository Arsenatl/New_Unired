import Banks from '@/components/Home/Banks/Banks'
import HomeFacts from '@/components/Home/HomeFacts/HomeFacts'
import HomeFinances from '@/components/Home/HomeFinances/HomeFinances'
import HomeFooter from '@/components/Home/HomeFooter/HomeFooter'
import HomeHeader from '@/components/Home/HomeHeader/HomeHeader'
import HomeNav from '@/components/Home/HomeNav/HomeNav'
import HomePossibilities from '@/components/Home/HomePossibilities/HomePossibilities'
import HomeStart from '@/components/Home/HomeStart/HomeStart'
import HomeUsers from '@/components/Home/HomeUsers/HomeUsers'
import WhyUnired from '@/components/Home/WhyUnired/WhyUnired'
import Image from 'next/image'

export default function Home() {
  return (
    <>
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

      {/* <Image
        width={1440}
        height={530}
        src={'/Group 2601.svg'}
        alt='color-red'
        priority
        className='absolute w-full top-0 z-[-1]'
      /> */}
    </>
  )
}
