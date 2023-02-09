import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FrontPage from "./components/FrontPage";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Profile from "./components/Profile";
import RepoDetail from "./components/RepoDetail";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FrontPage />,
//   },
//   {
//     path: "/followers/:follo",
//     element: <Followers />,
//   },
//   {
//     path: "/following/:follos",
//     element: <Following />,
//   },
//   {
//     path: "/profiles/:id",
//     caseSensitive: false,
//     element: <Profile />,
//   },
//   {
//     path: "/reposDetail/:ids/:follos",
//     element: <RepoDetail />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/followers/:follo" element={<Followers />} />
        <Route path="/following/:follos" element={<Following />} />
        <Route path="/profiles/:id" element={<Profile />} />
        <Route path="/reposDetail/:ids/:follos" element={<RepoDetail />} />
      </Routes>
    </BrowserRouter>
  </>
);
