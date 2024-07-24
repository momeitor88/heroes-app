import { createBrowserRouter } from "react-router-dom";
import { Root } from "./heroes/pages/Root/Root";
import { MarvelPage } from "./heroes/pages/Marvel/MarvelPage";
import { DcPage } from "./heroes/pages/Dc/DcPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { HeroPage } from "./heroes/pages/Hero/HeroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "hero/:heroId",
        element: <HeroPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
