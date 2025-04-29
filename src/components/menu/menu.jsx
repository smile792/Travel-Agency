import { Burger, Menu } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Paths } from "../../paths";

export const MenuForHeader = () => {
  const [open, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <Menu shadow="md" width={200} opened={open} onChange={setOpened}>
      <Menu.Target>
        <Burger opened={open} aria-label="Toggle navigation" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate(Paths.main)}>Главная</Menu.Item>
        <Menu.Item onClick={() => navigate(Paths.information)}>О нас</Menu.Item>
        <Menu.Item onClick={() => navigate(Paths.contacts)}>Контакты</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
