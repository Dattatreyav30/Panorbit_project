import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Hamburger from "./components/Hamburger/HamBurger";
import LandingPage from "./components/LandingPage/LandingPage";
import Posts from "./components/Posts/Posts";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import ToDo from "./components/Todo/Todo";
import UserProvider from "./store/UserProvider";

const router = createBrowserRouter([
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "profile-details/:id",
    element: (
      <>
        <Hamburger />
        <ProfileDetails />
      </>
    ),
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
