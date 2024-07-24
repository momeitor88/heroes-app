import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { MarvelPage } from "./heroes/pages/MarvelPage";
import { DcPage } from "./heroes/pages/DcPage";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "marvel",
            element: <MarvelPage />,
        },
        {
            path: "dc",
            element: <DcPage />,
        },
      ]
);