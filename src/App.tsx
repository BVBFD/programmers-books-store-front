import "./App.css";
import { ThemeContextProvider } from "./context/themeContext";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";

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
    element: layout(<div>도서목록</div>),
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
]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
