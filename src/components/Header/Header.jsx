import { IoIosArrowRoundForward } from "react-icons/io";
import image from "../../assets/hero-book-cover.jpg";
import image2 from "../../assets/hero-img-bg.jpg";
import Navbar from "../../shared/Navbar/Navbar";

export default function Header() {
  return (
    <div className="relative h-full w-full bg-[#efefef] mx-auto p-4">
      <div
        className="absolute h-full md:w-[30%] right-0 top-0"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto relative z-10 lg:mt-20 lg:mb-28">
        <div className="lg:flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-4 mb-4">
            <p className="text-orange-300">Best Selling Book</p>
            <h1 className="lg:text-5xl md:text-4xl  text-3xl text-4xl font-bold text-[#19150f] ">
              Discover the <br /> magical journey
            </h1>
            <p>
              Massa urna magnis dignissim id euismod porttitor vitae etiam <br />
              viverra at adipiscing sit morbi aliquet mauris porttitor nisi, <br />
              senectus pharetra, ac porttitor orci.
            </p>
            <button className="flex items-center px-4 py-2 border border-orange-400">
              <span className="">
                <IoIosArrowRoundForward size={30} />
              </span>{" "}
              Read Sample Now
            </button>
          </div>
          <div className="">
            <img className="mx-auto" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
