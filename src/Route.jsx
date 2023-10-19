import { createBrowserRouter } from "react-router-dom";
import Root from "./Root_Component/Root";
import Error from "./Error/Error";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },

  ]);

export default router;