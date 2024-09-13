import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmarks";
import Error from "./pages/error";
import Movies from "./pages/movies";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <Error />,
    },
    {
        path: "/bookmarks",
        element: <Bookmark />,
        errorElement: <Error />,
    },
    {
        path: "/movies",
        element: <Movies />,
        errorElement: <Error />,
    }
]);