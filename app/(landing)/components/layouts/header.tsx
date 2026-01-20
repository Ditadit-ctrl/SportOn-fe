"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { useState } from "react";
import Button from "../ui/button";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky w-full top-0 z-50 bg-white">
            <div className="px-4 sm:container flex justify-between py-6 items-center mx-auto">
                <div className="w-1/4 flex items-center gap-4">
                    <Button variant="ghost" className="md:hidden p-0!" onClick={() => setOpen(!open)}>
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </Button>
                    <Image src="/img/layouts/Logo.svg" alt="SportON Logo" width={127} height={30} className="" />
                </div>
                <nav className="hidden md:flex font-medium w-1/2 justify-between items-center">
                    <Link rel="stylesheet" href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"> Home </Link>
                    <Link rel="stylesheet" href="#"> Category </Link>
                    <Link rel="stylesheet" href="#"> Explore Products </Link>
                </nav>
                <div className="flex w-1/4 justify-end gap-8 items-center">
                    <FiSearch size={24} />
                    <div className="relative">
                        <FiShoppingBag size={24} />
                        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[9px] text-white text-center">3</div>
                    </div>
                </div>
            </div>
            {open && (
                <div className="md:hidden fixed w-full bg-white border-t px-6 py-4 flex flex-col gap-4">
                    <Link href="#">Home</Link>
                    <Link href="#">Category</Link>
                    <Link href="#">Explore Products</Link>
                </div>
            )}
        </header>
    );
}

export default Header;