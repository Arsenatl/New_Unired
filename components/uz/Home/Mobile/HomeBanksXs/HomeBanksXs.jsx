import Image from 'next/image'
import sber from '@/public/sberxs.png'
import google from '@/public/googlexs.png'
import visa from '@/public/visaxs.png'
import ibm from '@/public/ibmxs.png'

export default function HomeBanksXs() {
    return (
        <div className='container'>
            <div className="flex-between">
                <Image
                    src={sber}
                    alt='sberbank'
                />
                <Image
                    src={google}
                    alt='google'
                />
            </div>
            <div className="flex-center mt-12 justify-center gap-12">
                <Image
                    src={visa}
                    alt='visa'
                />
                <Image
                    src={ibm}
                    alt='ibm'
                />
            </div>
        </div>
    )
}
