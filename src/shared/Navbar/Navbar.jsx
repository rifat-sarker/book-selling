import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
      <div className="">
        <ul className="flex items-center gap-8">
          <li>
            <div className="flex flex-col items-centers">
              <a className="mr-10" href=""><span className="text-sm">Grace</span> <br /> <span className="text-xl font-bold">Bryant</span></a>
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
      <div className="flex gap-4 justify-center items-center">
        <CiFacebook size={25} />
        <FaInstagram size={25} />
        <CiTwitter size={25} />
        <FaYoutube size={25} />
      </div>
    </div>
  );
}
