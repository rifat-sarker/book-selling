import { createBrowserRouter, } from "react-router-dom";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            
        }
    ]
  },
]);

export default router;
