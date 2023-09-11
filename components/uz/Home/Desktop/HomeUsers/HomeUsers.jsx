import Image from 'next/image'
import React from 'react'

export default function HomeUsers() {
    return (
        <section className='bg-homeUser bg-set pt-[368px] pb-[690px]'>
            <div className="container">
                <div className="row">
                    <h2 className='text-18 tracking-normal font-semibold text-white'>Фойдаланувчилар</h2>
                    <h1 className='text-40 tracking-normal font-extrabold text-white mt-5 mb-[30px]'>Биз мижозларим ҳақида қайғурамиз,<br />
Чунки мижозларимиз ишончи энг муҳим мезондир</h1>
                    <p className='text-18 tracking-normal text-white'>Шу сабабдан биз доимий равишда фойдаланувчиларимиз учун янги қулайлик ва <br /> хизматларни жорий этиб борамиз. Натижада эса, ҳозирги пайтда мобил иловамизда <br />бизга ишонч билдирган 50.000 дан зиёд фойдаланувчилар сонига эришдик.</p>
                </div>
            </div>
        </section>
    )
}
