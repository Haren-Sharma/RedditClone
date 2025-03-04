import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable } from "react-native";

const ICON_MAP = {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} as const;

type IconType = keyof typeof ICON_MAP;

// Extract valid icon names for each type dynamically
type IconName<T extends IconType> = T extends "Ionicons"
  ? ComponentProps<typeof Ionicons>["name"]
  : T extends "MaterialCommunityIcons"
  ? ComponentProps<typeof MaterialCommunityIcons>["name"]
  : T extends "FontAwesome"
  ? ComponentProps<typeof FontAwesome>["name"]
  : never;

type Props<T extends IconType> = {
  type: T;
  name: IconName<T>;
  size: number;
  color: string;
  style?:any;
};

const Icon = <T extends IconType>({ type, name, size, color,style}: Props<T>) => {
  const IconComponent = ICON_MAP[type] as React.ComponentType<{
    name: string;
    size: number;
    color: string;
    style: any
  }>;

  return (
    <Pressable style={({ pressed }) => [pressed && { opacity: 0.4 }]}>
      <IconComponent style={style}  name={name} size={size} color={color} />
    </Pressable>
  );
};

export default Icon;
