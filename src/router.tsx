import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Detail from "./pages/detail";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
])