import Nav from "../components/Nav";

const Order = () => {
    return (
        <>
            <Nav />
            <div className="Order">
                <div className="container mx-auto">
                    <div className="text-4xl mb-10">ORDER</div>

                    <div className="">
                        <p className="text-2xl mb-5">주문자정보</p>
                        <form action="" className="flex flex-col w-1/3 mx-auto">
                            <label className="mb-3 flex">
                                <span className="mr-5">이름 :</span>
                                <input type="text" className="Order_inputItem" />
                            </label>
                            <label className="mb-3">
                                <span className="mr-5">이메일 :</span>
                                <input type="email" className="Order_inputItem" />
                            </label>
                            <label className="mb-3">
                                <span className="mr-5">전화번호 :</span>
                                <input type="number" className="Order_inputItem" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;