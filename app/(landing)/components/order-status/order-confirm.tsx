"use client"

import Image from "next/image"
const OrderConfirm = () => {
    return (
        <div className="bg-white w-4/5 sm:w-160 p-16 flex flex-col justify-center items-center text-center mb-10">
            <Image src="/img/hero/order-status/icon-order-confirmed.svg" alt="order submitted" width={117} height={117} className="mb-4"/>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2"> Order Confirmed !!</h2>
            <p className="text-xs sm:text-base text-center mb-6">We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.</p>
        </div>
    )
}

export default OrderConfirm;