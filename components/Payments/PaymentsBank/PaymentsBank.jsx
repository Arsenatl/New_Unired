import Image from 'next/image'
import React from 'react'

export default function PaymentsBank() {
  return (
    <div className='container'>
            <div className="row flex-between">

                <Image
                    width={322}
                    height={50}
                    src={'/image 1.png'}
                    alt='sber-bank'
                />
                <Image
                    width={215}
                    height={73}
                    src={'/google.png'}
                    alt='google'
                />
                <Image
                    width={130}
                    height={73}
                    src={'/visa.png'}
                    alt='visa'
                />
                <Image
                    width={146}
                    height={73}
                    src={'/ibm.png'}
                    alt='ibm'
                />
            </div>
        </div>
  )
}
