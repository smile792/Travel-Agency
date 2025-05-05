import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes";
import { Header } from "./modules/header/header";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  </MantineProvider>
);
