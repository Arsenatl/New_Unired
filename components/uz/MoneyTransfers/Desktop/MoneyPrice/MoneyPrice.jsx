import ButtonMoneyPrice from "./ButtonMoneyPrice";

export default function MoneyPrice() {
    return (
        <section className="py-36 bg-[#F7F9FC] mt-32 mb-20">
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-[2fr_1fr] gap-24">
                        <div>
                            <h1 className='text-36'>Ўтказмалар нархи</h1>
                            <p className='text-18 font-light mt-5 my-5'>Unired Mobile орқали сиз Ўзбекистондан Россия ва МДҲ мамлакатларига картадан картага халқаро пул ўтказмаларини комиссиясиз амалга оширишингиз мумкин. “Unired”га қўшилинг ва сўмни рублга айлантириш учун камроқ пул тўланг, ўзингиз учун кўпроқ тежанг!</p>
                            <ButtonMoneyPrice/>
                        </div>
                        <div className="before:content-[' '] before:block before:h-[60%] before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center">
                            <div>

                                <h2 className="text-14">
                                картадан пул маблағларини ҳар бир муваффақиятли ечиб олиш учун <br />
                                    <span className="text-36">0%</span>
                                </h2>
                                <p className="text-14">дан</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
