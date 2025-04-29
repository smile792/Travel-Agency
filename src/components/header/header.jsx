import { Group, Text } from "@mantine/core";
import { MenuForHeader } from "../menu/menu";
import { Paths } from "../../paths";
import { Link } from "react-router";
import { HandleToggle } from "../handleToggle/handleToggle";

export const Header = () => {
  return (
    <Group m={10} mt={10} justify="space-between" sx={{ cursor: "pointer" }}>
      <Link style={{ textDecoration: "none" }} to={Paths.main}>
        <Text
          size="xl"
          fw={700}
          variant="gradient"
          gradient={{ from: "pink", to: "indigo", deg: 141 }}
          component="header"
        >
          Travel Agency
        </Text>
      </Link>
      <Group>
        <HandleToggle />
        <MenuForHeader />
      </Group>
    </Group>
  );
};
