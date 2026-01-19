import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";


const categoryList = [
    {
        name: "Running",
        image: "category-running.png",
    },
    {
        name: "Tennis",
        image: "category-tennis.png",
    },
    {
        name: "Basketball",
        image: "category-basketball.png",
    },
    {
        name: "Football",
        image: "category-football.png",
    },
    {
        name: "Badminton",
        image: "category-badminton.png",
    },
    {
        name: "Swimming",
        image: "category-swimming.png",
    },
];


const CategoriesSection = () => {
    return (
        <section id="category-section" className="mx-auto px-4 md:container pb-20 pt-10 mt-20 overflow-x-hidden">
            <div className="flex justify-between">
                <h2 className="font-bold text-md w-1/2 sm:text-2xl">Browse by Categories</h2>
                <Link href="#" className="flex gap-2 text-primary font-medium items-center">
                    <span className="text-[11px] sm:text-base ">See All Categories</span>
                    <FiArrowRight/>
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-12">
                {
                    categoryList.map((category, index) => (
                        <div className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7D1] w-full aspect-square flex flex-col justify-center items-center mt-8" key={index}>
                            <Image src={`/img/categories/${category.image}`} width={86} height={86} alt={category.name} className="w-[66px] h-[66px] sm:h-[86px] sm:w-[86px]"/>
                            <div className="text-primary font-medium text-sm lg:text-xl mt-3">{category.name}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CategoriesSection;