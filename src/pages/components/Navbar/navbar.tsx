function Navbar(){
return <>
<nav className="bg-white p-3 sticky top-0 shadow-lg z-10">
    <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
        <span className="text-xl text-dark-300 sm:text-center">
            <a href="/">My Blog App</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
                <a href="#" className="me-4 md:me-6">Home</a>
            </li>
            <li>
                <a href="#" className="me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="me-4 md:me-6">Create Blog</a>
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