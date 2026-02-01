"use client"

import Image from "next/image"
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
    const reloadOrderStatus = () => {
        window.location.reload();
    }

    return (
        <div className="bg-white w-4/5 sm:w-160 p-16 flex flex-col justify-center items-center text-center mb-10">
            <Image src="/img/hero/order-status/icon-order-submitted.svg" alt="order submitted" width={117} height={117} className="mb-4"/>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2"> Order Submitted</h2>
            <p className="text-xs sm:text-base text-center mb-6">Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            <Button variant="dark" className="w-full text-;xs" onClick={reloadOrderStatus}> <FiRefreshCw /> Refresh Order Status</Button>
        </div>
    )
}

export default OrderSubmitted;