import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { Main } from "./page/main/main";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { Paths } from "./paths";
import { Information } from "./page/information/information";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Contacts } from "./page/contacts/contacts";

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

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  cursorType: "pointer",
});

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
