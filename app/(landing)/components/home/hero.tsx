import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="mx-auto flex lg:h-screen py-10 lg:pt-0 overflow-x-hidden">
            <div className="relative self-center mx-auto">
                <Image src="/img/hero/img-basketball.png" alt="hero image" width={532} height={532} className="absolute -top-20 -z-100 -left-65 grayscale" />
                <div className="px-[10px] relative w-full flex items-center flex-col lg:ml-10 lg:block">
                    <div className="text-sm text-primary italic sm:text-base">Friday Sale 50%</div>
                    <h1 className="text-[45px] font-extrabold italic mt-2 text-transparent bg-clip-text bg-gradient-to-b from-black to-[#979797D1] sm:text-[75px] md:text-[95px] md:leading-[110px] sm:leading-[90px] leading-[60px] text-center pr-3 lg:text-left">
                        WEAR YOUR <br />
                        TOP-QUALITY <br />
                        SPORTSWEAR <br />
                    </h1>
                    <Image src="/img/hero/img-hero.png" alt="hero image" width={723} height={787} className="lg:absolute lg:-right-5 lg:top-1/2 lg:-translate-y-1/2 -z-10 w-[323] h-[387] sm:w-[523] sm:h-[587] md:w-[723] md:h-[787]" />
                    <p className="text-sm w-2/3 sm:text-base mt-10 lg:w-4/9 text-left">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion
                    </p>
                    <div className="flex gap-5 mt-10">
                        <Button>Explore More <FiFastForward /></Button>
                        <Button variant="ghost" className="">Watch Video <Image src="/img/hero/Play.svg" alt="icon play video" width={16} height={16} /></Button>
                    </div>
                    <Image src="/img/hero/Hero-Ornament.svg" alt="hero decor" width={513} height={513} className="absolute -right-2/5 top-2/5 -translate-y-1/2 -z-100" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;