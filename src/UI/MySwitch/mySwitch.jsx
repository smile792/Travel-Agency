import { Switch } from "@mantine/core";
import classes from "./mySwitch.module.css";
export const MySwitch = ({ onClick, size, color, onLabel, offLabel }) => {
  return (
    <Switch
      onClick={onClick}
      size={size}
      color={color}
      onLabel={onLabel}
      offLabel={offLabel}
      classNames={{
        track: classes.track,
      }}
    />
  );
};
