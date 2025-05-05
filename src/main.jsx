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
import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </MantineProvider>
);
