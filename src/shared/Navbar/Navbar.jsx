import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto mb-10 font-Raleway font-semibold text-[14px] text-[#93908b]">
      <div>
        {isMenuOpen && (
          <div
            className="fixed left-0 right-0 top-20 z-40 bg-[#efefef] p-6 
           shadow-md w-full "
          >
            <ul className="flex flex-col items-center gap-4">
              <li className="text-[#19150f] bg-transparent px-4 py-2  border-transparent hover:bg-[#b69d78] hover:text-white hover:border-[#b69d78] w-[30%] text-center transition-all ">
                <a href="/">Home</a>
              </li>
              <li className="text-[#19150f] bg-transparent px-4 py-2  border-transparent hover:bg-[#b69d78] hover:text-white hover:border-[#b69d78] w-[30%] text-center transition-all">
                <a href="/about">About</a>
              </li>
              <li className="text-[#19150f] bg-transparent px-4 py-2  border-transparent hover:bg-[#b69d78] hover:text-white hover:border-[#b69d78] w-[30%] text-center transition-all">
                <a href="/books">Books</a>
              </li>
              <li className="text-[#19150f] bg-transparent px-4 py-2  border-transparent hover:bg-[#b69d78] hover:text-white hover:border-[#b69d78] w-[30%] text-center transition-all">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
        <ul className="flex items-center gap-8">
          <li>
            <div className="flex  flex-col items-centers">
              <a className="mr-10" href="">
                {/* <span className="text-sm">Grace</span> <br />{" "}
                <span className="text-xl  text-[#19150f] ">
                  Bryant
                </span> */}
                <img src={logo} alt="" />
              </a>
            </div>
          </li>
          <div className="md:flex hidden items-center gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/books">Books</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="md:flex hidden gap-6 justify-center items-center text-white">
        <FaTwitter size={20} />
        <FaFacebook size={20} />
        <FaYoutube size={20} />
        <FaInstagram size={20} />
      </div>
      <div className="md:hidden">
        <button className="border p-3" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose color="white" size={25} />
          ) : (
            <GrMenu color="white" size={25} />
          )}
        </button>
      </div>
    </div>
  );
}
