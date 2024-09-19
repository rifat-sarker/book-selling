import Navbar from "../../shared/Navbar/Navbar";
import BestSelling from "../BestSelling/BestSelling";
import BookStory from "../Header/BookStory/BookStory";
import Header from "../Header/Header";
import TicketEvent from "../TicketEvent/TicketEvent";
import Welcome from "../Welcome/Welcome";


export default function Home() {
    return(
        <div>
            {/* <Navbar/> */}
            <Header/>
            <Welcome/>
            <BookStory/>
            <BestSelling/>
            <TicketEvent/>
        </div>
    )
}