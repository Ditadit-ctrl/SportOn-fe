import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const ProductSection = () => {
    const productList = [
        {
            name: "SportOn Products 1",
            image: "product-1.png",
            category: "Running",
            price: 12000,
            img: "product-1.png",
        },
        {
            name: "SportOn Products 2",
            image: "product-2.png",
            category: "Tennis",
            price: 15000,
            img: "product-2.png",
        },
        {
            name: "SportOn Products 3",
            image: "product-3.png",
            category: "Basketball",
            price: 18000,
            img: "product-3.png",
        },
        {
            name: "SportOn Products 4",
            image: "product-4.png",
            category: "Football",
            price: 20000,
            img: "product-4.png",
        },
        {
            name: "SportOn Products 5",
            image: "product-5.png",
            category: "Badminton",
            price: 25000,
            img: "product-5.png",
        },
        {
            name: "SportOn Products 6",
            image: "product-6.png",
            category: "Bassketball",
            price: 30000,
            img: "product-6.png",
        },
        {
            name: "SportOn Products 7",
            image: "product-7.png",
            category: "Tennis",
            price: 35000,
        },
        {
            name: "SportOn Products 8",
            image: "product-8.png",
            category: "Cycling",
            price: 40000,
        }
    ]

    return (
        <section id="product-section" className="mx-auto mt-20 pb-10 px-4 md:container overflow-x-hidden">
            <h2 className="font-bold text-4xl italic text-center mb-15"><span className="text-primary">OUR</span> PRODUCTS</h2>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-10">
                {
                    productList.map((product, index) => (
                        <Link href="#" className="p-2 overflow-y-clip hover:shadow-lg duration-200" key={index}>
                            <div className="bg-primary-light w-full aspect-square flex justify-center items-center p-3 relative">
                                <Image src={`/img/products/${product.image}`} alt={product.name} width={300} height={300} className="aspect-square object-contain" />
                                <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                            </div>
                            <div className="bg-white flex flex-col gap-2 mt-4 pb-8">
                                <h3 className="text-[14px] leading-tight sm:text-lg font-medium">{product.name}</h3>
                                <div className="flex flex-col sm:flex-row justify-between">
                                    <span className="text-[12px] sm:text-sm text-[#A0A0A0]">{product.category}</span>
                                    <span className="text-[13px] sm:text-lg text-primary">{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(product.price)}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductSection;