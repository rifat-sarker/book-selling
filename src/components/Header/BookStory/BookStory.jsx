import { IoIosArrowRoundForward } from "react-icons/io";
import writer from "../../../assets/writer-template-woman-figure.jpg";
export default function BookStory() {
  return (
    <div className="py-12">
      <div className="flex items-center gap-10">
        <img className="w-[850px] h-[600px]" src={writer} alt="" />
        <div className="p-4 space-y-6">
          <p className="text-[#b69d78]">The story of</p>
          <h1 className="text-5xl font-bold">Grace Bryant</h1>
          <p>
            Dapibus id interdum fusce sed odio massa tellus amet, faucibus nibh
            consequat justo mauris, donec nec tempus in volutpat iaculis
            pellentesque in urna.
          </p>
          <p className="text-[#413E3A]">
            Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue
            cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar
            ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu
            aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis
            morbi a nunc diam mauris ut tortor ipsum.
          </p>
          <button className="flex items-center border-b-2 border-b-[#b69d78]">
            <span className="inline-block">
              <IoIosArrowRoundForward size={30} />
            </span>{" "}
            Read More
          </button>
          <div className="pt-20">
            <div className="flex gap-5 border-t-2 border-black border-b-2 p-4">
              <div className="flex gap-4">
                <h1 className="text-[#b69d78] text-5xl font-bold">12</h1>
                <div className="text-[#413E3A]">
                  <p>Books</p>
                  <p>Published</p>
                </div>
              </div>
              <div className="flex gap-4">
                <h1 className="text-[#b69d78] text-5xl font-bold">08</h1>
                <div className="text-[#413E3A]">
                  <p>Best Selling</p>
                  <p>Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
