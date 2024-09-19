import { IoIosArrowRoundForward } from "react-icons/io";
import photo from "../../assets/writer-template-book-signing.jpg";
import { MdLocationOn } from "react-icons/md";

export default function TicketEvent() {
  return (
    <div className="flex max-w-6xl mx-auto justify-between gap-10 py-14">
      <div className="space-y-8 w-1/2">
        <p className="text-[#b69d78]">Don't miss it!</p>
        <h1 className="text-5xl font-bold text-[#19150f]">
          Get a special copy signed by me
        </h1>
        <p>
          Duis quis euismod facilisis nunc arcu, diam non aliquet eget imperdiet
          maecenas blandit vitae laoreet tincidunt sociis proin massa pulvinar.
        </p>
        <div className="border-b-2 border-[#19150f] border-t-2 py-6">
          <div className="flex justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#93908b] pb-4">18 Apr</h2>
              <h2 className="text-4xl font-bold text-[#19150f]">2021</h2>
            </div>
            <div>
              <div className="border-[#b69d78] border-r-2 px-8"></div>
              <div className="flex gap-4">
                <MdLocationOn size={30} />
                <div>
                  <p>Location</p> <br />
                  <p>1234 N Spring St, Los Angeles, CA 90012, United States.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center border-b-2 pt-8 border-b-[#b69d78] text-[#19150f]">
          <span className="inline-block">
            <IoIosArrowRoundForward size={30} />
          </span>{" "}
          Get Tickets To The Event
        </button>
      </div>
      <div>
        <img className="h-[600px] w-[600px]" src={photo} alt="" />
      </div>
    </div>
  );
}
