import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Admin/Dashboard.tsx";
import Exams from "./pages/Admin/Exams.tsx";
import Results from "./pages/Admin/Results.tsx";
import Tasks from "./pages/Tasks.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/task",
        element: <Tasks />,
      },

      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/exams",
        element: <Exams />,
      },
      {
        path: "/admin/results",
        element: <Results />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
