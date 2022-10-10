
import { BrowserRouter, useRoutes, Outlet } from "react-router-dom";

 export const Navbar = () => (
  <>
    <div className="navbar">Navbar</div>
    <Outlet />
  </>
);
const Home1 = () => <h1>Home1111</h1>;
const About1 = () => <h1>About1111</h1>;

const  RoutesAs = () => {
  const routes = [
    {
      path: "/navbar",
      element: <Navbar />,
      children: [
        // { path: "/", element: <Home1 /> },
        { path: "home1", element: <Home1 /> },
        { path: "about1", element: <About1 /> }
      ]
    }
  ];
  let element = useRoutes(routes);

  return element;
};


export default  RoutesAs
