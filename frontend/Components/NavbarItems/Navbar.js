import Link from "next/link";
import Images from "../../utils/Images";
import NavLinks from "./NavLinks";
import Image from "next/image";
// import "../styles/Home.module.css";

const Navbar = ({ cart }) => {
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            {/* react icon  */}
            <Image
              src={Images.logo}
              width={100}
              height={100}
              // className="mr-1"
              alt="logo"
              priority
            />
            {/* <span className="ml-3 text-xl">SunShine Chemical</span> */}
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-primary">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-primary">About</a>
          </Link>
          <Link href="/products">
            <a className="mr-5 hover:text-primary">Products</a>
          </Link>
          <Link href="/contact">
            <a className="mr-5 hover:text-primary">Contact US</a>
          </Link>
          <Link href="/checkout">
            <a className="mr-5 hover:text-primary">Cart({cart.length})</a>
          </Link>
          <NavLinks />
        </nav>
        <div className="m-3 my-4">
          <Link href="/login">
            <button className="bg-primary text-white  px-6 py-2 rounded-full">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile nav */}
      {/* <ul
      // className={`
      // md:hidden bg-transparent fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      // duration-500 ${open ? "left-0" : "left-[-100%]"}
      // `}
      >
        <li>
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
          <Link href="/checkout">
            <a className="mr-5 hover:text-red-700">Cart({cart.length})</a>
          </Link>
        </li>
        <NavLinks />
        <div className="py-5">
          {/* button  */}
      {/* <Link href="/login">
            <button className="bg-primary text-black   px-6 py-2 rounded-full">
              Login
            </button>
          </Link> */}
      {/* </div> */}
      {/* // </ul> */}
    </header>

    // New navbar

    // <div class="h-screen bg-gray-50">
    //   <header>
    //     <div class="relative z-20 border-b bg-white">
    //       <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
    //         <div class="flex items-center justify-between">
    //           <div class="relative z-20">
    //             <a href="#">
    //               <img
    //                 src="https://tailus.io/sources/blocks/navigation-layout/preview/images/logo.svg"
    //                 alt="logo-tailus"
    //                 class="w-32"
    //               />
    //             </a>
    //           </div>

    //           <div class="flex items-center justify-end border-l lg:border-l-0">
    //             <input
    //               type="checkbox"
    //               name="hamburger"
    //               id="hamburger"
    //               class="peer"
    //               hidden
    //             />
    //             <label
    //               for="hamburger"
    //               class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
    //             >
    //               <div
    //                 aria-hidden="true"
    //                 class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
    //               ></div>
    //               <div
    //                 aria-hidden="true"
    //                 class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
    //               ></div>
    //             </label>

    //             <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
    //               <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
    //                 <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
    //                   <li>
    //                     <a
    //                       href="#"
    //                       class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100"
    //                     >
    //                       <span class="relative text-cyan-800">Home</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
    //                     >
    //                       <span class="relative group-hover:text-cyan-800">
    //                         Services
    //                       </span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
    //                     >
    //                       <span class="relative group-hover:text-cyan-800">
    //                         Portfolio
    //                       </span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
    //                     >
    //                       <span class="relative group-hover:text-cyan-800">
    //                         About us
    //                       </span>
    //                     </a>
    //                   </li>
    //                 </ul>

    //                 <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
    //                   <a
    //                     href="#"
    //                     class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
    //                   >
    //                     Get started
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>

    // <div class="relative w-full">
    //   <nav class="fixed z-10 w-full border-b bg-transparent md:absolute md:bg-transparent">
    //     <div class="container m-auto px-2 md:px-12 lg:px-7">
    //       <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
    //         <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
    //           <a href="#" aria-label="logo">
    //             <img
    //               src={Images.logo}
    //               class="w-36"
    //               alt="logo"
    //               width="144"
    //               height="68"
    //             />
    //           </a>

    //           <button
    //             aria-label="humburger"
    //             id="hamburger"
    //             class="relative w-10 h-10 -mr-2 lg:hidden"
    //           >
    //             <div
    //               aria-hidden="true"
    //               id="line"
    //               class="inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300"
    //             ></div>
    //             <div
    //               aria-hidden="true"
    //               id="line2"
    //               class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300"
    //             ></div>
    //           </button>
    //         </div>

    //         <div class="hidden w-full lg:flex flex-wrap justify-between items-center space-y-12 p-6 rounded-xl bg-white md:w-8/12 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
    //           <div class="block w-full">
    //             <ul class="space-y-12 tracking-wide font-medium md:flex md:space-y-0">
    //               <li>
    //                 <a href="#" class="block md:px-3">
    //                   <div
    //                     class="relative text-cyan-800
    //         before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800"
    //                   >
    //                     <span>Nike</span>
    //                   </div>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="block md:px-3 group">
    //                   <div
    //                     class="relative text-gray-600
    //                                             before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
    //                   >
    //                     <span class="transition group-hover:text-cyan-700">
    //                       Adiddas
    //                     </span>
    //                   </div>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" class="block md:px-3 group">
    //                   <div
    //                     class="relative text-gray-600
    //                                             before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
    //                   >
    //                     <span class="transition group-hover:text-cyan-700">
    //                       Cart
    //                     </span>
    //                   </div>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div class="w-full md:w-max">
    //             <button
    //               type="button"
    //               title="Start buying"
    //               class="w-full py-3 px-6 text-center rounded-full transition bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max"
    //             >
    //               <span class="block text-white text-sm">Shop now</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    // {/* nav end  */}
  );
};

export default Navbar;
