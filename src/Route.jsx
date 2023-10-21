import { createBrowserRouter } from "react-router-dom";
import Root from "./Root_Component/Root";
import Error from "./Error/Error";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import About from "./About/About";
import BrandProduct from "./BrandProduct/BrandProduct";
import BrandProductDetails from "./BrandProduct/BrandProductDetails";
import PriventRoute from "./PriveteRoute/PriventRoute";
import MyCart from "./MyCart/MyCart";
import ProductUpdate from "./ProductUpdate/ProductUpdate";


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
        },
        {
          path:'/addProduct',
          element:<PriventRoute><AddProduct></AddProduct></PriventRoute>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/:brandName',
          element:<BrandProduct></BrandProduct>,
          loader:({params})=>fetch(`http://localhost:5000/brandProduct`)
          
        }
        ,
        {
          path:'/myCart',
          element:<PriventRoute><MyCart></MyCart></PriventRoute>,
          loader:() => fetch('http://localhost:5000/myCart')
        },
        {
          path:'/productDetaisl/:id',
          element:<PriventRoute><BrandProductDetails></BrandProductDetails></PriventRoute>,
          loader:({params})=>fetch(`http://localhost:5000/brandProduct`)
          
        },
        {
          path:'/productUpdate/:id',
          element:<PriventRoute><ProductUpdate></ProductUpdate></PriventRoute>,
          loader:({params})=>fetch(`http://localhost:5000/updateproduct/${params.id}`)
        }
      ]
    },

  ]);

export default router;