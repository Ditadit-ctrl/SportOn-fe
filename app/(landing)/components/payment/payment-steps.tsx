"use client"

import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import FileUploads from "../ui/file-uploads";
import priceFormatter from "@/app/utils/price-formatter";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
    const {push} = useRouter();

    const updloadAndConfirm = () => {
        push("/order-status/9009")
    }

    return (
        <CardWithHeader title="Payment Steps">
            <div className="p-5">
                <ol className="list-decimal text-[11px] pl-2 flex flex-col gap-4 mb-6">
                    <li>
                        Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
                    </li>
                    <li>
                        After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.
                    </li>
                    <li>
                        Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.
                    </li>
                </ol>
                <FileUploads />

            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{priceFormatter(45000)}</div>
                </div>
                <Button variant="dark" className="w-full mt-4 text-sm!" onClick={updloadAndConfirm}>Upload Receipt & Confirm<FiCheckCircle /></Button>
            </div>

        </CardWithHeader>
    )
}

export default PaymentSteps;