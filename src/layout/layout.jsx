import { AppShell } from "@mantine/core";
import { Header } from "../modules/header/header";
import { useHeadroom } from "@mantine/hooks";

export const Layout = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 40 });

  return (
    <AppShell
      header={{
        height: 48,
        collapsed: !pinned,
        offset: false,
      }}
      navbar={{
        breakpoint: "md",
        width: "35%",
      }}
    >
      <AppShell.Header withBorder={false} bg="transparent">
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <div className="main-page">{children}</div>
      </AppShell.Main>
    </AppShell>
  );
};
