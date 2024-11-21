import Link from "next/link";

export default function Header() {
    return(
        <header className="flex w-full items-center justify-between border-b-2 border-blue-300 pb-8">
            <h1 className="font-black text-3xl text-blue-600">BlogTech</h1>
            <nav className=" flex gap-8 mt-4 items-center justify-center mr-20 font-bold text-blue-900">
                <Link href='/'>Home</Link>
                <Link href='/post'>Postagens</Link>
            </nav>
        </header>
    )
}