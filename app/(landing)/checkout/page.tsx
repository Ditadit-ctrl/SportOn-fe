import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-center pt-20 mb-10">Checkout Now</h1>
                <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col sm:gap-14 p-4 mb-10">
                    <OrderInformation />
                    <CartItems/>
                </div>
            </div>
        </main>
    )
}

export default Checkout;