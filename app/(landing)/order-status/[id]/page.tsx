"use client"

import { useState } from "react";
import OrderConfirm from "../../components/order-status/order-confirm";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
    const [isConfirm, setIsConfirm] = useState(false);
    return (
        <main>
            <main className="bg-gray-100 min-h-[80vh]">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-center pt-20 mb-10">Order Status</h1>
                    {
                        isConfirm ? (<OrderConfirm />) : (<OrderSubmitted />
                        )
                    }
                </div>
            </main>
        </main>
    )
}

export default OrderStatus;   