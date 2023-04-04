import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/ContactUs";
import First from "./components/First/First";
import Friends from "./components/Friedns/Friends";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

// const router = createBrowserRouter([{
//   path:'/',
//   element: <App></App>
// },
// {
//   path: '/about',
//   element: <AboutUs></AboutUs>
// },
// {
//   path: '/contact',
//   element: <Contact></Contact>
// },
// {
//   path: '/error',
//   element: <ErrorPage></ErrorPage>
// }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
         path:'/',
         element:<First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId', 
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
         path: 'posts',
         element: <Posts></Posts>,
         loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      
      },
      {
          path: 'post/:postId',
          element: <PostDetail></PostDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path:'*',
        element: <div>404 Not Found</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
