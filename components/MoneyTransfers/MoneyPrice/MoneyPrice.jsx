import ButtonMoneyPrice from "./ButtonMoneyPrice";

export default function MoneyPrice() {
    return (
        <section className="py-36 bg-[#F7F9FC] mt-32 mb-20">
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-[2fr_1fr] gap-24">
                        <div>
                            <h1 className='text-36'>Стоимость  перевода</h1>
                            <p className='text-18 font-light mt-5 my-5'>В дополнение к местным денежным переводам у нас есть возможность <br /> переводить деньги из Узбекистана в 7 стран и на данный момент принимать <br /> деньги только из России, но мы также работаем над добавлением других стран</p>
                            <ButtonMoneyPrice/>
                        </div>
                        <div className="before:content-[' '] before:block before:h-[60%] before:w-[2px] before:bg-[#F44949] before:mr-3 before:-ml-3 flex-center">
                            <div>

                                <h2 className="text-14">
                                    начинается с <br />
                                    <span className="text-36">0%</span>
                                </h2>
                                <p className="text-14">за каждое успешное <br /> списание средств с карты</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
