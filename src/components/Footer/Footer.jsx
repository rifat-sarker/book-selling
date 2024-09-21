import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <div className="">
          <ul className="flex items-center gap-8">
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

        <div className="flex flex-col items-centers">
          <a className="mr-10" href="">
            <span className="text-sm">Grace</span> <br />{" "}
            <span className="text-xl font-bold text-[#19150f] ">Bryant</span>
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center ">
          <FaTwitter size={20} />
          <FaFacebook size={20} />
          <FaYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="text-center py-16">
        <p className="text-[#93908b] text-sm">Copyright &copy; 2024 Bestselling Author</p>
      </div>
    </div>
  );
}
