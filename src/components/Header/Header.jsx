import { IoIosArrowRoundForward } from "react-icons/io";
import image from "../../assets/hero-book-cover.jpg";
import image2 from "../../assets/hero-img-bg.jpg";
import Navbar from "../../shared/Navbar/Navbar";

export default function Header() {
  return (
    <div className="relative h-full w-full mb-10 bg-[#efefef]">
      <div
        className="absolute h-full w-[30%] right-0 top-0"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between gap-4 py-14">
          <div className="space-y-4 w-1/2">
            <p className="text-orange-300">Best Selling Book</p>
            <h1 className="text-5xl font-bold">
              Discover the <br /> magical journey
            </h1>
            <p>
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra at adipiscing sit morbi aliquet mauris porttitor nisi,
              senectus pharetra, ac porttitor orci.
            </p>
            <button className="flex items-center px-4 py-2 border border-orange-400">
              <span className="inline-block">
                <IoIosArrowRoundForward size={30} />
              </span>{" "}
              Read Sample Now
            </button>
          </div>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
