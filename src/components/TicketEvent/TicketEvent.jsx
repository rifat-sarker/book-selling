import { IoIosArrowRoundForward } from "react-icons/io";
import photo from "../../assets/writer-template-book-signing.jpg";
import { MdLocationOn } from "react-icons/md";

export default function TicketEvent() {
  return (
    <div className="lg:flex max-w-6xl mx-auto  gap-10 lg:py-14 p-4">
      <div className="space-y-8 w-full mx-auto">
        <p className="text-[#b69d78] font-DMSerif">Don't miss it!</p>
        <h1 className="lg:text-5xl md:text-4xl font-DMSerif text-3xl  text-[#19150f]">
          Get a special copy <br /> signed by me
        </h1>
        <p className="font-Raleway text-[#413E3A]">
          Duis quis euismod facilisis nunc arcu, diam non aliquet eget imperdiet
          maecenas blandit vitae laoreet tincidunt sociis proin massa pulvinar.
        </p>
        <div className="border-t border-b border-[#19150f] py-6">
          <div className="flex justify-between gap-6">
            <div>
              <h2 className="text-2xl font-DMSerif text-[#93908b] pb-4">18 Apr</h2>
              <h2 className="lg:text-4xl font-DMSerif md:text-4xl sm:text-3xl text-2xl  text-[#19150f]">2021</h2>
            </div>
            <div>
              <div className="border-[#b69d78] border-r-2 px-8"></div>
              <div className="flex gap-4">
                <MdLocationOn size={30} />
                <div>
                  <p className="font-DMSerif">Location</p> <br />
                  <p className="font-Raleway">1234 N Spring St, Los Angeles, CA 90012, United States.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center text-white hover:text-[#19150f] bg-[#b69d78] px-4 py-2 font-Raleway">
          <span className="inline-block ">
            <IoIosArrowRoundForward size={30} />
          </span>{" "}
          Get Tickets To The Event
        </button>
      </div>
      <div className="w-full mx-auto justify-center text-center place-items-center my-6">
        <img className="lg:h-[600px] lg:w-[600px] mx-auto" src={photo} alt="" />
      </div>
    </div>
  );
}
