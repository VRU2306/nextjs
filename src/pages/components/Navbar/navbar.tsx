import Link from "next/link";

function Navbar() {
    return <>
        <nav className="bg-white p-3 sticky top-0 shadow-lg z-10">
            <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
                <span className="text-xl text-dark-300 sm:text-center">
                    <Link href="/">My Blog App</Link>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <Link href="/" className="me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <a href="#" className="me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <Link href="/create-blog" className="me-4 md:me-6">Create Blog</Link>
                    </li>
                    <li>
                        <a href="#" className="">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

    </>
}
export default Navbar;