import Navbar from "../../shared/Navbar/Navbar";
import BestSelling from "../BestSelling/BestSelling";
import BookStory from "../Header/BookStory/BookStory";
import Header from "../Header/Header";
import NewsLetter from "../NewsLetter/NewsLetter";
import TicketEvent from "../TicketEvent/TicketEvent";
import Welcome from "../Welcome/Welcome";


export default function Home() {
    return(
        <div className="">
            {/* <Navbar/> */}
            <Header/>
            <Welcome/>
            <BookStory/>
            <BestSelling/>
            <TicketEvent/>
            <NewsLetter/>
        </div>
    )
}