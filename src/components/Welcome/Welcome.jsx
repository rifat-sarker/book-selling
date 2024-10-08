import image1 from "../../assets/Screenshot 2024-09-18 210004.png"
import image2 from "../../assets/Screenshot 2024-09-18 211236.png"
import image3 from "../../assets/Screenshot 2024-09-18 211322.png"
export default function Welcome() {
  return (
    <div className="text-center py-16 w-3/4 mx-auto space-y-8 font-DMSerif">
      <h1 className="lg:text-5xl md:text-4xl  text-3xl  text-[#b69d78]">
        Welcome to the World of pure dolor <br /> ipsum tortor pretium.
      </h1>
      <p className="text-[#93908b] font-Raleway">
        Egestas gravida erat enim ac morbi at malesuada arcu habitant blandit
        pulvinar tellus consectetur mi at <br /> suscipit sit sit pulvinar amet
        convallis imperdiet pretium, egestas scelerisque imperdiet duis aenean
        turpis <br /> dui scelerisque sit massa semper risus, vitae volutpat sodales
        eget.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
}
