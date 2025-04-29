import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { Main } from "./page/main/main";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { Paths } from "./paths";
import { Information } from "./page/information/information";
import { Contacts } from "./page/contacts/contacts";
import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Main />,
  },
  {
    path: Paths.information,
    element: <Information />,
  },
  {
    path: Paths.contacts,
    element: <Contacts />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
