import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
    {
        name: "SportOn Products 1",
        image: "product-1.png",
        category: "Running",
        price: 12000,
        qty: 2,
    },
    {
        name: "SportOn Products 2",
        image: "product-2.png",
        category: "Tennis",
        price: 15000,
        qty: 1,
    },
    {
        name: "SportOn Products 3",
        image: "product-3.png",
        category: "Basketball",
        price: 18000,
        qty: 3,
    },
    {
        name: "SportOn Products 4",
        image: "product-4.png",
        category: "Football",
        price: 20000,
        qty: 1,
    },
    {
        name: "SportOn Products 5",
        image: "product-5.png",
        category: "Badminton",
        price: 25000,
        qty: 2,
    },
    {
        name: "SportOn Products 6",
        image: "product-6.png",
        category: "Bassketball",
        price: 30000,
        qty: 1,
    },
    {
        name: "SportOn Products 7",
        image: "product-7.png",
        category: "Tennis",
        price: 35000,
        qty: 4,
    },
    {
        name: "SportOn Products 8",
        image: "product-8.png",
        category: "Cycling",
        price: 40000,
        qty: 1,
    }
]
const CartPopup = () => {
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);

    const {push} = useRouter();

    const handleCheckout = () => {
        push("/checkout");
    }

    return (
        <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-70 sm:w-90">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shoping Cart
            </div>
            <div className="overflow-y-scroll max-h-96">
            {
                cartList.map((item, index) => (
                    <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                        <div className="bg-rimary-light aspect-square w-16 justify-center items-center">
                            <Image src={`/img/products/${item.image}`} alt={item.name} width={63} height={63} className="aspect-square object-contain" />
                        </div>
                        <div className="self-center">
                            <div className="text-xs sm:text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div>{item.qty}x</div>
                                <div className="text-primary">{priceFormatter(item.price)}</div>
                            </div>
                        </div>
                        <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto"><FiTrash /></Button>
                    </div>
                ))
            }
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{ priceFormatter(totalPrice) }</div>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4 text-sm!" onClick={handleCheckout}>Checkout Now <FiArrowRight/></Button>
            </div>
        </div>
    )
}

export default CartPopup;