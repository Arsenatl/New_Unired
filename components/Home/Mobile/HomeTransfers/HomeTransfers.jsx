import Image from "next/image";
import HomeTransfersBtn from "./HomeTransfersBtn";
import { HomeTransfersLink } from "./HomeTransfersLink";

async function getData() {
    const res = HomeTransfersLink
    return res
}

export default async function HomeTransfers() {
    const data = await getData()
    return (
        <section className="mt-24 flex flex-col gap-24">
            {
                data.map((element, value) => {
                    return (
                        <div>
                            <div key={value} className="container">
                                <h1 className="text-13-xs">{element.h1}</h1>
                                <h2 className="text-24-xs mt-5 mb-1">{element.h2}</h2>
                                <p className="text-14-xs font-normal">{element.pOne}</p>
                                <HomeTransfersBtn img={element.icon} text={element.btnText} />
                                <p className="text-14-xs font-normal">{element.pTwo}{element.spanOne}{element.spanTwo}{element.spanThree}</p>
                            </div>
                            <Image
                                src={element.img}
                                alt="phone"
                                className="mt-5"
                            />
                        </div>
                    )
                })
            }
        </section>
    )
}
