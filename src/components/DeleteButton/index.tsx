import { useState } from "react";
import { Pressable, PressableProps } from "react-native";
import { DefaultDeleteIcon, HoverDeleteIcon } from "../../../assets/icons";

export const DeleteButton = ({ onPress }: PressableProps) => {
  const [isBeingPressed, setIsBeingPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsBeingPressed(true)}
      onPressOut={() => setIsBeingPressed(false)}
      onPress={onPress}
    >
      {isBeingPressed ? <HoverDeleteIcon /> : <DefaultDeleteIcon />}
    </Pressable>
  );
};
