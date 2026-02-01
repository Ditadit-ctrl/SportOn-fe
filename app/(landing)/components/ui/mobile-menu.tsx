import Link from "next/link";

const MobileMenu = () => {
    return (
        <div className="md:hidden fixed w-full bg-white border-t px-6 py-4 flex flex-col gap-4">
            <Link href="#">Home</Link>
            <Link href="#">Category</Link>
            <Link href="#">Explore Products</Link>
        </div>
    )
}

export default MobileMenu;