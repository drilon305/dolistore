import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"

const Layout = () => {
  return (
<div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  )
  
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/products/:id",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <Product />
      },

    ]
  },
  
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
