import { IoIosArrowRoundForward } from "react-icons/io";
import cover1 from "../../assets/book-cover-1.jpg";
import cover2 from "../../assets/book-cover-2.jpg";
import cover3 from "../../assets/book-cover-3.jpg";
export default function BestSelling() {
  return (
    <div className="max-w-6xl mx-auto lg:my-10 p-4">
      <div className="lg:flex flex-wrap gap-6 justify-between py-14">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#19150f] text-center ">
          Best selling books
        </h1>
        <div>
          <button className="flex items-center justify-center border-b-2 border-b-[#b69d78] my-4 mx-auto">
            <span className="inline-block">
              <IoIosArrowRoundForward size={30} />
            </span>{" "}
            View All Books
          </button>
        </div>
      </div>
      <div className="lg:flex flex-wrap gap-12 justify-between">
        <div className="text-center space-y-6">
          <img className="mx-auto" src={cover1} alt="" />
          <h3 className="lg:text-2xl text-xl font-semibold">Est proin massa</h3>
          <button className="flex items-center border-b-2 border-b-[#b69d78] mx-auto text-[#b69d78]">
            <span className="inline-block">
              <IoIosArrowRoundForward size={30} />
            </span>{" "}
            Order Your Copy
          </button>
        </div>
        <div className="text-center space-y-6">
          <img className="mx-auto" src={cover2} alt="" />
          <h3 className="lg:text-2xl text-xl font-semibold">Ultrices aliquam</h3>
          <button className="flex items-center border-b-2 border-b-[#b69d78] mx-auto text-[#b69d78]">
            <span className="inline-block">
              <IoIosArrowRoundForward size={30} />
            </span>{" "}
            Order Your Copy
          </button>
        </div>
        <div className="text-center space-y-6">
          <img className="mx-auto" src={cover3} alt="" />
          <h3 className="lg:text-2xl text-xl font-semibold">Egestas</h3>
          <button className="flex items-center border-b-2 border-b-[#b69d78] mx-auto text-[#b69d78]">
            <span className="inline-block">
              <IoIosArrowRoundForward size={30} />
            </span>{" "}
            Order Your Copy
          </button>
        </div>
      </div>
    </div>
  );
}
