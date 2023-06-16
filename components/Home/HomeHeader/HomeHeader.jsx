import Image from 'next/image'
import React from 'react'
import ButtonHomeHeader from './ButtonHomeHeader'

export default function HomeHeader() {
    return (
        <header>
            <div className="container mt-[100px] mb-[60px]">
                <h1 className='text-96'>Финансовая <br /> инфраструктура <br /> платежей</h1>
                <p className='text-18 mt-6 mb-5'>Lorem ipsum skdb lhiiwbfbhjb wifirwig gapi ie igt ienlignlenbrt <br />
                    kbrjtj lke biapi pigu iq pei pie inekjbnk a enpi . aeekinetbka pe ggtrr <br />
                    kjbgjebjgbjdbjbvdbeenknkfjnknwknk ehgiheig jkrnoke lknlkdt tdkjntdj <br />
                    dtlkgbdlhgb ldkt bgig iw giw ig ir gwbobwob ueo bb bwou ouw
                </p>
                <ButtonHomeHeader/>
            </div>
        </header>
    )
}
