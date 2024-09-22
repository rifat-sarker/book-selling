import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
      <div className="">
      { !isMenuOpen && (
           <div className="md:hidden">
           <a href="">
             <span className="text-sm">Grace</span> <br />{" "}
             <span className="text-xl font-bold text-[#19150f] ">
               Bryant
             </span>
           </a>
         </div>
        )}
        {isMenuOpen && (
          <div>
            <ul className="flex flex-col items-center gap-8">
              <li>
                <div className="flex flex-col items-centers">
                  <a href="">
                    <span className="text-sm">Grace</span> <br />{" "}
                    <span className="text-xl font-bold text-[#19150f] ">
                      Bryant
                    </span>
                  </a>
                </div>
              </li>
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
            </ul>
          </div>
        )}
        <ul className="md:flex items-center hidden gap-8">
          <li>
            <div className="flex flex-col items-centers">
              <a className="mr-10" href="">
                <span className="text-sm">Grace</span> <br />{" "}
                <span className="text-xl font-bold text-[#19150f] ">
                  Bryant
                </span>
              </a>
            </div>
        
          </li>
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
        </ul>
      </div>
      <div className="md:flex hidden gap-6 justify-center items-center text-white">
        <FaTwitter size={20} />
        <FaFacebook size={20} />
        <FaYoutube size={20} />
        <FaInstagram size={20} />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose size={25} /> : <GrMenu size={25} />}
        </button>
      </div>
    </div>
  );
}
