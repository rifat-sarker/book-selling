import Navbar from "../../shared/Navbar/Navbar";
import Header from "../Header/Header";
import Welcome from "../Header/Welcome/Welcome";

export default function Home() {
    return(
        <div>
            {/* <Navbar/> */}
            <Header/>
            <Welcome/>
        </div>
    )
}