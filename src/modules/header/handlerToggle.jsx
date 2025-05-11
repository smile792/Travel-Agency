import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import IconSun from "/src/svg-image/IconSun.svg?react";
import IconMoon from "/src/svg-image/IconMoon.svg?react";
import { MySwitch } from "../../UI/MySwitch/mySwitch";
export const HandlerToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <div className="toggle">
      <MySwitch
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        size="md"
        color="dark.4"
        onLabel={<IconSun color="var(--mantine-color-yellow-4)" />}
        offLabel={<IconMoon color="var(--mantine-color-blue-6)" />}
      />
    </div>
  );
};
