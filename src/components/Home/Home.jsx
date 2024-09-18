import Navbar from "../../shared/Navbar/Navbar";
import BookStory from "../Header/BookStory/BookStory";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";


export default function Home() {
    return(
        <div>
            {/* <Navbar/> */}
            <Header/>
            <Welcome/>
            <BookStory/>
        </div>
    )
}