import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/myprojects",
    element: <MyProjects />,
  },
  {
    path: "/contactme",
    element: <ContactMe />,
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/myprojects",
        element: <MyProjects />,
      },
      {
        path: "/contactme",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen bg-pageBackground overflow-y-scroll">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
