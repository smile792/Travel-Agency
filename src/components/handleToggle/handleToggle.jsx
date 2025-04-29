import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import IconSun from "/src/svg-image/IconSun.svg?react";
import IconMoon from "/src/svg-image/IconMoon.svg?react";
export const HandleToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Switch
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="md"
      color="dark.4"
      onLabel={<IconSun color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoon color="var(--mantine-color-blue-6)" />}
    />
  );
};
