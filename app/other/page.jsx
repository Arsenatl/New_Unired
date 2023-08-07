// 'use client'
// import React, { useState } from 'react'

// export default function page() {
//   const [top1, setTop1] = useState(0)
//   const [top2, setTop2] = useState(170)
//   const [top3, setTop3] = useState(340)
//   const handle = () => {
//     setTop1(top1 - 169)
//     setTop2(top2 - 169)
//     setTop3(top3 - 169)
//     if (top1 == -169) {
//       setTop1(340)
//       setTop2(0)
//       setTop3(170)
//     } else if (top2 == -169) {
//       setTop1(170)
//       setTop2(340)
//       setTop3(0)
//     } else if (top3 == -169) {
//       setTop1(0)
//       setTop2(170)
//       setTop3(340)
//     }
//   }
//   return (
//     <>
//       <div className='h-[300px] overflow-hidden relative'>
//         <div className={`h-[150px] bg-red-500  absolute top-[${top1}px] left-0 w-full duration-1000`}>
//           <h1>alfiuhsauifhafhaweohfwohfowihfuihu</h1>
//         </div>
//         <div className={`h-[150px] bg-blue-500 absolute top-[${top2}px] left-0 w-full duration-1000`}>
//           <h1>alfiuhsauifhafhaweohfwohfowihfuihu</h1>
//         </div>
//         <div className={`h-[150px] bg-black backdrop-opacity-100 contrast-[0.1] absolute top-[${top3}px] left-0 w-full  duration-1000  `}>
//           <h1 className='text-white text-[30px]'>sdlfjasbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
//         </div>
//       </div>
//       <div onClick={() => handle()} className='w-[30px] h-[30px] bg-red-500'>
//         <h1>click</h1>
//       </div>
//     </>
//   )
// }


// // background: linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0%, #FFF 80.79%);



import React from 'react'
import Other from '@/components/Other/Other'

export default function page() {
  return (
    <Other />
  )
}
