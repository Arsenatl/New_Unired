import Image from 'next/image'
import React from 'react'
import ButtonHomeFinances from './ButtonHomeFinances'
import img from '@/public/Group 2532.svg'
import img1 from '@/public/Ellipse 2.svg'
import img2 from '@/public/Ellipse 3.svg'
import img3 from '@/public/Ellipse 4.svg'
import img4 from '@/public/Group 2209 (1).svg'

export default function HomeFinances() {
    return (
        <main className=' bg-[#F7F9FC] pb-[1px]'>
            <div className="container my-[70px] py-[150px]">
                <div className="row">
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Ўтказмалар</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Россиядан Ўзбекистонга пул ўтказмалари</h1>
                            <p className='text-18 mb-5'>Россиядан Ўзбекистонга пул ўтказмаларини энди бизнинг иловамиз орқали қулайроқ амалга оширишингиз мумкин!</p>

                            <ButtonHomeFinances logo='мамлакатларга онлайн пул ўтказмалари' span='Бошқа' />
                            <p className='text-18 mt-10'>
                            
                                <span className='font-semibold text-[#EF2B23]'> МДҲ </span>
                                ва
                                <span className='font-semibold text-[#EF2B23]'> Европа </span>
                                мамлакатларига ҳеч қандай қийинчиликларсиз онлайн пул ўтказмаларини амалга оширинг!
                            </p>

                        </div>
                        {/* <div className='relative'>
                            <div className="absolute">
                                <Image
                                    src={img}
                                    alt='tel'
                                    className=''
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={img1}
                                    alt='tel'
                                    className=''
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={img2}
                                    alt='tel'
                                    className=''
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={img3}
                                    alt='tel'
                                    className=''
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={img4}
                                    alt='tel'
                                    className=''
                                />
                            </div>
                        </div> */}
                        {/* <Image
                            width={600}
                            height={600}
                            src={'/Group 2532.svg'}
                            alt='phone'
                        /> */}
                        {/* <Image src={img} alt='tel' /> */}
                        <svg width="627" height="787" viewBox="0 0 627 787" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g id='one'>

                                    <path
                                        d="M554.315 47.6245C556.812 50.634 557.646 54.3082 556.788 58.6309C555.928 62.9594 553.382 67.874 549.232 73.2803C540.933 84.0913 526.34 96.7181 506.571 110.353C467.044 137.613 406.996 168.784 335.793 197.389C264.59 225.993 195.769 246.593 142.078 256.782C115.224 261.878 92.212 264.358 74.6072 263.953C65.8035 263.751 58.4135 262.828 52.5966 261.182C46.7875 259.537 42.6316 257.198 40.1345 254.188C37.6374 251.179 36.8036 247.505 37.6617 243.182C38.521 238.854 41.0674 233.939 45.2174 228.533C53.5162 217.722 68.1091 205.095 87.8787 191.46C127.405 164.2 187.454 133.029 258.657 104.424C329.86 75.8195 398.68 55.22 452.371 45.0313C479.226 39.9353 502.237 37.455 519.842 37.8596C528.646 38.062 536.036 38.9849 541.853 40.6313C547.662 42.2755 551.818 44.6151 554.315 47.6245Z"
                                        stroke="url(#paint0_linear_0_164)" stroke-width="2" />
                                </g>
                                <g id='two'>

                                    <path
                                        d="M579.632 362.446C585.719 369.778 585.362 379.465 578.978 390.891C572.611 402.286 560.355 415.207 543.166 428.844C508.797 456.109 454.874 486.103 389.538 512.337C324.203 538.572 259.893 556.052 208.756 563.12C183.181 566.655 160.963 567.576 143.591 565.713C126.17 563.845 113.93 559.217 107.843 551.885C101.756 544.553 102.113 534.867 108.498 523.44C114.864 512.045 127.12 499.124 144.31 485.488C178.679 458.222 232.601 428.229 297.937 401.994C363.273 375.76 427.583 358.279 478.719 351.211C504.295 347.676 526.512 346.755 543.885 348.618C561.306 350.486 573.546 355.114 579.632 362.446Z"
                                        stroke="url(#paint1_linear_0_164)" stroke-width="2" />
                                </g>
                                <g id='three'>
                                    <path
                                        d="M553.601 402.898C548.56 408.97 537.422 412.519 520.9 413.396C504.476 414.268 483.167 412.471 458.413 408.221C408.922 399.723 345.899 381.463 281.098 355.443C216.297 329.423 162.048 300.595 126.72 275.035C109.051 262.251 96.158 250.315 89.0319 239.987C81.8631 229.597 80.7135 221.114 85.7538 215.042C90.794 208.971 101.933 205.422 118.455 204.544C134.879 203.672 156.188 205.47 180.942 209.72C230.433 218.218 293.456 236.478 358.257 262.498C423.058 288.517 477.307 317.346 512.634 342.905C530.304 355.69 543.196 367.625 550.323 377.953C557.491 388.343 558.641 396.827 553.601 402.898Z"
                                        stroke="url(#paint2_linear_0_164)" stroke-width="2" />

                                </g>
                                <g id='four'>

                                    <path
                                        d="M553.6 739.385C551.094 742.405 546.994 744.771 541.321 746.467C535.639 748.166 528.449 749.167 519.906 749.473C502.82 750.084 480.557 747.906 454.626 743.184C402.782 733.744 336.512 714.181 268.126 686.722C199.741 659.263 142.245 629.13 104.568 602.624C85.723 589.367 71.8792 577.047 64.0974 566.451C60.2062 561.152 57.8585 556.321 57.1323 552.049C56.4072 547.785 57.3049 544.132 59.8114 541.113C62.3179 538.093 66.4174 535.726 72.0906 534.031C77.7729 532.332 84.9623 531.331 93.506 531.025C110.592 530.414 132.855 532.592 158.786 537.314C210.63 546.754 276.9 566.317 345.285 593.776C413.671 621.235 471.167 651.368 508.844 677.873C527.689 691.131 541.533 703.451 549.314 714.047C553.206 719.346 555.553 724.177 556.279 728.448C557.005 732.713 556.107 736.366 553.6 739.385Z"
                                        stroke="url(#paint3_linear_0_164)" stroke-width="2" />
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_0_164" x1="537.731" y1="-0.00149404" x2="-3.99737"
                                    y2="97.8037" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#733AE8" />
                                    <stop offset="1" stop-color="#EA4D69" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_0_164" x1="549.51" y1="356.533" x2="92.8532" y2="463.335"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#733AE8" />
                                    <stop offset="1" stop-color="#EA4D69" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_0_164" x1="88.0442" y1="213.218" x2="569.727" y2="251.922"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#733AE8" />
                                    <stop offset="1" stop-color="#EA4D69" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_0_164" x1="80.04" y1="541.417" x2="529.138" y2="642.119"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#733AE8" />
                                    <stop offset="1" stop-color="#EA4D69" />
                                </linearGradient>
                            </defs>
                        </svg>
                        
                        <div id='onee' className=' w-[100px] h-[50px] bg-red-500'></div>

                    </div>
                    <div className="flex-between my-[200px]">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>Тўловлар</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Россиядан Ўзбекистонга хизматлар учун тўлов</h1>

                            <p className='text-18 mb-5'>Ҳаётингизни соддалаштиринг – иловамизни юклаб олинг ва уйингиздан чиқмасдан Россиядан туриб Ўзбекистондаги хизматлар учун тўланг!</p>

                            <ButtonHomeFinances logo='учун онлайн тўловлар' span='Хизматлар ' />
                            <p className='text-18 mt-10'>
                                Ҳеч қандай муаммосиз онлайн хизматлар учун тўланг. Интернет ва ўйинлардан тортиб такси ва коммунал хизматларгача, бизда сизга керак бўлган ҳамма нарса бор! Бир нечта кликлар ва тўловингиз тугалланди.

                            </p>
                        </div>
                        <Image
                            width={600}
                            height={600}
                            src={'/Group 2531.svg'}
                            alt='phone'
                        />
                    </div>
                    <div className="flex-between">
                        <div>
                            <h2 className='text-18 font-bold tracking-[0.01em] text-[#EF2B23]'>UCOIN</h2>
                            <h1 className='text-36 mt-[30px] mb-[20px]'>Исталган вақтда электрон пул</h1>
                            <p className='text-18 mb-5'>Unired иловасидан фойдаланиш тажрибангизни бойитинг: иловани ҳозир юклаб олинг ва бизнинг электрон ҳамёнимиз —“Ucoin”нинг барча афзалликларидан баҳраманд бўлинг!</p>

                            <ButtonHomeFinances logo='ҳамёнини очинг' span='UCOIN' />
                            <p className='text-18 mt-10'>
                                “Unired”да Ucoin билан қулай ва хавфсиз электрон пул ҳар доим қўлингизда. Харидлар учун тўланг, пул ўтказмаларини амалга оширинг ва молиянгизни самарали бошқаринг - буларнинг барчаси Ucoin билан қулай!

                            </p>
                        </div>
                        <Image
                            width={600}
                            height={600}
                            src={'/Group 2254.svg'}
                            alt='phone'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
