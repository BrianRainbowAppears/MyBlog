import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Single } from './pages/Single';
import { Write } from './pages/Write';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from "./pages/Home";
import './stylus.scss'

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/post/:id',
        element: <Single></Single>
      },
      {
        path: '/write',
        element: <Write></Write>
      },

    ]

  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} /> 
      </div>
    </div>
  );
}

export default App;
