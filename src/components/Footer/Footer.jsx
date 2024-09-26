import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="py-12">
      <div className="lg:flex justify-between items-center max-w-6xl mx-auto p-4">
        <div>
          <ul className="flex flex-col sm:flex-row justify-center items-center lg:gap-10 md:gap-10 sm:gap-8 gap-2 text-center text-[#93908b]">
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

        <div className="flex text-center flex-col justify-center items-centers my-8">
          <Link to="/">
            <a className="" href="/">
              <img className="mx-auto" src={logo} alt="" />
            </a>
          </Link>
        </div>

        <div className="flex gap-6 justify-center items-center text-[#93908b] ">
          <FaTwitter size={20} />
          <FaFacebook size={20} />
          <FaYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="text-center py-16">
        <p className="text-[#93908b] text-sm">
          Copyright &copy; 2024 Bestselling Author
        </p>
      </div>
    </div>
  );
}
