import "./App.css";
import { ThemeContextProvider } from "./context/themeContext";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";

const layout = (comp: React.ReactNode) => {
  return <Layout>{comp}</Layout>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: layout(<Home />),
    errorElement: layout(<Error />),
  },
  {
    path: "/books",
    element: layout(<Books />),
    errorElement: layout(<Error />),
  },
  {
    path: "/signup",
    element: layout(<Signup />),
    errorElement: layout(<Error />),
  },
  {
    path: "/reset",
    element: layout(<ResetPassword />),
    errorElement: layout(<Error />),
  },
  {
    path: "/login",
    element: layout(<Login />),
    errorElement: layout(<Error />),
  },
  {
    path: "/books/:bookId",
    element: layout(<BookDetail />),
    errorElement: layout(<Error />),
  },
  {
    path: "/cart",
    element: layout(<Cart />),
    errorElement: layout(<Error />),
  },
  {
    path: "/order",
    element: layout(<Order />),
    errorElement: layout(<Error />),
  },
  {
    path: "/orderlist",
    element: layout(<OrderList />),
    errorElement: layout(<Error />),
  },
]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
