"use client";


import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="sm:container mx-auto p-4 sm:py-40 flex flex-col lg:flex-row gap-12">
            <div className="bg-primary-light aspect-square min-w-8 sm:min-w-140 flex justify-center items-center">
                <Image src="/img/products/product-1.png" alt="Product 1 Image" width={550} height={550} className="aspect-square object-contain w-full" />
            </div>
            <div className="w-full sm:py-7">
                <h1 className="font-bold text-4xl sm
                :text-5xl mb-6">Product 1</h1>
                <div className="py-2 px-6 bg-primary-light text-primary rounded-full w-fit mb-5 text-xs sm:text-base">Running</div>
                <p className="leading-loose mb-8 text-xs sm:text-base">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.</p>
                <div className="text-primary text-xl sm:text-[32px] mb-12 font-semibold">
                    {
                        priceFormatter(1000000)
                    }
                </div>
                <ProductActions />
            </div>
        </main>
    )
}

export default ProductDetail;