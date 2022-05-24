import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-yellow-400 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-red-400 mb-4 md:mb-0">
            {/* react icon  */}
            <span className="ml-3 text-xl">SunShine Chemical</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-orange-400">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-white">About</a>
          </Link>
          <Link href="/products">
            <a className="mr-5 hover:text-white">Products</a>
          </Link>
          <Link href="/contact">
            <a className="mr-5 hover:text-red-700">Contact US</a>
          </Link>
        </nav>
        <div className="m-3 my-4">
          <button className="inline-flex text-black items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
          <Link href="/singnup">
            <button className="inline-flex text-red-600 items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
