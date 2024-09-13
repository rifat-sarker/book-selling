import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="p-4 max-w-6xl mx-auto font-Inter"> 
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;