import Container from "@/components/Container";
import { RiMenu2Line, RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
  return (
    <div className="bg-primary01 w-full font-poppins">
      <Container>
        <div className="flex justify-between py-6 items-center">
          {/* nav left */}
          <div className="flex items-center text-white gap-4">
            <div className="px-1.5 py-1.5 cursor-pointer rounded-md bg-white/25">
              <RiMenu2Line size={26} />
            </div>
            <div>
              <img src="/src/assets/images/logo-white.svg" alt="" />
            </div>
            <div className="flex gap-1  text-sm">
              <NavLink>
                <h4 className="px-2 py-2.5  relative transition-all duration-300 group">Home <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0  -bottom-1.5 text-lg">.</span>
                
                
                
                </h4>
                
              </NavLink>
              <NavLink>
                <h4 className="px-2 py-2.5 relative transition-all group duration-300 flex items-center gap-px">
                  Shop <IoIosArrowDown /> <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0  -bottom-1.5 text-lg">.</span>


                  {/* hover dropdown menu */}
                <div className="w-52 py-2 invisible group-hover:visible opacity-0 shadow-lg group-hover:opacity-100 transition-all duration-300 bg-white text-zinc-800  absolute top-[4.5rem] z-50">
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Details</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Category</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Cart</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">WishList</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Compare</h4>
                </div>
                </h4>
              </NavLink>
              <NavLink>
                <h4 className="px-2 py-2.5 relative transition-all group duration-300 flex items-center gap-px ">
                  Pages <IoIosArrowDown /> <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0  ransition-all duration-300 -bottom-1.5 text-lg">.</span>

                  {/* hover dropdown menu */}
                <div className="w-52 py-2 opacity-0 invisible group-hover:visible shadow-lg group-hover:opacity-100 transition-all duration-300 bg-white text-zinc-800  absolute top-[4.5rem] z-50">
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Details</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Category</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Cart</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">WishList</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Compare</h4>
                </div>
                </h4>
              </NavLink>
              <NavLink>
                <h4 className="px-2 py-2.5 relative transition-all  group duration-300">Coupons <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0  ransition-all duration-300 -bottom-1.5 text-lg">.</span></h4>
              </NavLink>
              <NavLink>
                <h4 className="px-2 py-2.5 relative transition-all group duration-300 flex items-center gap-px">
                  Blog <IoIosArrowDown /> <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0  ransition-all duration-300 -bottom-1.5 text-lg">.</span>

                  {/* hover dropdown menu */}
                <div className="w-52 py-2 invisible group-hover:visible opacity-0 shadow-lg group-hover:opacity-100 transition-all duration-300 bg-white text-zinc-800  absolute top-[4.5rem] z-50">
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Details</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Shop Category</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Cart</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">WishList</h4>
                    <h4 className="w-full hover:text-primary01  hover:bg-gray-100 transition-all duration-300 pl-8 py-2">Compare</h4>
                </div>
                </h4>
              </NavLink>
              <NavLink>
                <h4 className="px-2 py-2.5 relative transition-all group duration-300">Contacts <span className="absolute text-white font-bold -translate-x-1/2 left-1/2  group-hover:opacity-100 opacity-0 transition-all duration-300  -bottom-1.5 text-lg">.</span></h4>
              </NavLink>
            </div>
          </div>
          {/* nav right */}
          <div className="flex items-center gap-6">
            {/* search button */}
            <div className="flex  rounded-full overflow-hidden items-center">
              <div className="bg-white pl-6 gap-1 pr-3 py-2 flex items-center">
                <RiSearchLine size={21} />
                <input
                  type="text"
                  className="focus:border-none w-24  focus:outline-none font-light  text-black text-xs"
                  name=""
                  placeholder="Search for products"
                  id=""
                />
              </div>
              <button className="bg-[#010F1C] px-6 font-medium text-sm py-2 text-white">
                Search
              </button>
            </div>
            {/* register/login */}
            <div className="flex gap-2  items-center">
              <div className="px-2 py-2 rounded-full w-fit text-white bg-white/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                    fill="#fff"
                  />
                  <path
                    d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h4 className="flex flex-col gap-1 cursor-pointer justify-center">
                <span className="text-white/40 text-sm leading-none">Hello</span>
                <span className="text-white text-sm leading-none">Register</span>
              </h4>
            </div>
            {/* wishlist */}
            <div className="px-2 py-2 cursor-pointer rounded-full relative  text-white bg-white/25">
            <div className="w-3 h-3 p-2 flex border-[3px] border-primary01 -right-1 justify-center items-center text-black text-xs bg-white absolute -top-2 rounded-full">
                <span className="">0</span>
            </div>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            {/* cartlist */}
            <div className="px-2 py-2 cursor-pointer rounded-full relative  text-white bg-white/25">
            <div className="w-3 h-3 p-2 flex border-[3px] border-primary01 -right-1 justify-center items-center text-black text-xs bg-white absolute -top-2 rounded-full">
                <span className="">0</span>
            </div>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.70365 10.1018H7.74942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.5343 10.1018H13.5801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
