import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-4 bg-dark-alternate text-white text-[12px] sm:text-base">
            <div className="container mx-auto flex justify-between pt-14 pb-24">
                <div className="w-105">
                    <Image src="/img/layouts/home/logo-footer.svg" alt="SportON Logo" width={187} height={44} className="my-10" />
                    <p className=" mp-8">Engineered for endurance and designed for speed.  Experience gear that moves as fast as you do.</p>
                </div>
                <div className="w-105 grid grid-cols-1 text-end sm:text-start sm:grid-cols-2 ">
                    <div className="flex gap-7 flex-col">
                        <Link href="#">Home</Link>
                        <Link href="#">Categories</Link>
                        <Link href="#">Product</Link>
                        <Link href="#">About Us</Link>
                    </div>
                    <div className="flex gap-7 flex-col">
                        <Link href="#">Instagram</Link>
                        <Link href="#">Facebook</Link>
                        <Link href="#">Tik Tok</Link>
                        <Link href="#">Youtube</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-white/15 text-center md:test-left">
                <div className="container mx-auto py-6.5 flex justify-between">
                    <span>© 2024 SportON. All rights reserved.</span>
                    <div className="grid grid-cols-2 w-105">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;