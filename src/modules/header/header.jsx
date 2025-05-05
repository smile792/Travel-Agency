import { Text } from "@mantine/core";
import { MenuForHeader } from "../header/menu";
import { Paths } from "../../paths";
import { HandleToggle } from "../header/handleToggle";
import { MyLink } from "../../UI/myLink/myLink";

export const Header = () => {
  return (
    <div className="header">
      <MyLink to={Paths.main}>
        <Text
          size="xl"
          fw={700}
          variant="gradient"
          gradient={{ from: "pink", to: "indigo", deg: 141 }}
        >
          Travel Agency
        </Text>
      </MyLink>
      <div className="header-group">
        <HandleToggle />
        <MenuForHeader />
      </div>
    </div>
  );
};
