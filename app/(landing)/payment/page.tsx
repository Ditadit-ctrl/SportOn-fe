import PaymentSteps from "../components/payment/payment-steps";
import PaymentOptions from "../components/payment/payment-options";

const Checkout = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-center pt-20 mb-10">Payment</h1>
                <div className="sm:grid sm:grid-cols-2 sm:gap-14 p-4 flex flex-col gap-4">
                    <PaymentOptions />
                    <PaymentSteps />
                </div>
            </div>
        </main>
    )
}

export default Checkout;