import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./component/login";
import RootLayout from "./layout/Layout";
import Register from "./component/register";
import HomePage from "./homepage";
import FormCreate from "./component/FormCreate";
import FormEdit from "./component/FormEdit";
import GetAPI from "./component/getAPI";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/login",
    loader: () => {
      const acces_token = localStorage.getItem("access_token")
      console.log(acces_token,"ini dirouter");
      ;
      if (!acces_token) {
        return null;
      }
      throw redirect("/");
    },
    element:<Login/>
  },
  {
    path: "/",
    loader: () => {
      const acces_token = localStorage.getItem("access_token")
      console.log(acces_token,"ini dirouter");
      ;
      if (acces_token) {
        return null;
      }
      return redirect("/");
    },
    element: <RootLayout/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"plants",
        element:<FormCreate/>
      },
      {
        path:"plants/:id",
        element:<FormEdit/>
      },
      {
        path:"API",
        element:<GetAPI/>
      },
      
    ]
  },
]);
