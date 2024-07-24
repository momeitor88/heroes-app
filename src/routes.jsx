import { createBrowserRouter } from "react-router-dom";
import { Root } from "./heroes/pages/Root/Root";
import { MarvelPage } from "./heroes/pages/Marvel/MarvelPage";
import { DcPage } from "./heroes/pages/Dc/DcPage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                  path: "/marvel",
                  element: <MarvelPage />,
                },
                {
                    path: "/dc",
                    element: <DcPage />,
                }
              ],
        },
    ]
);